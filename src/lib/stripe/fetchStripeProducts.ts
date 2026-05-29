import { headers } from "next/headers";
import formatStripeAmount from "./formatStripePrice";
import { StripePriceData } from "./types/StripePriceData";
import { StripeProductData } from "./types/StripeProductData";

function resolveBaseUrl() {
  const envBaseUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const headerStore = headers();
  const host =
    headerStore.get("x-forwarded-host") ?? headerStore.get("host") ?? null;

  if (host) {
    const proto =
      headerStore.get("x-forwarded-proto") ??
      (host.includes("localhost") || host.startsWith("127.0.0.1")
        ? "http"
        : "https");

    return `${proto}://${host}`;
  }

  return envBaseUrl || "http://localhost:3000";
}

/**
 * Fetches active Stripe products and their associated prices.
 *
 * This function retrieves all products from the Stripe API, filters for active products,
 * and then fetches the price information for each active product. It also formats the
 * price amount for display.
 *
 * @async
 * @function fetchStripeProducts
 * @throws {Error} If NEXT_PUBLIC_SITE_URL is not defined in the environment variables.
 * @throws {Error} If there's an issue fetching products or their prices from the API.
 * @returns {Promise<{products: StripeProductData[]}>} A promise that resolves to an object containing an array of active Stripe products with their price information.
 *
 * @example
 * try {
 *   const { products } = await fetchStripeProducts();
 *   console.log(products);
 * } catch (error) {
 *   console.error("Failed to fetch Stripe products:", error);
 * }
 */
export default async function fetchStripeProducts(): Promise<{
  products: StripeProductData[];
}> {
  const hasFirebaseAdminConfig = Boolean(
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID &&
    process.env.FIREBASE_CLIENT_EMAIL &&
    process.env.FIREBASE_PRIVATE_KEY,
  );

  if (!hasFirebaseAdminConfig) {
    return { products: [] };
  }

  const baseUrl = resolveBaseUrl();
  const requestInit: RequestInit = {
    cache: "no-store",
    signal: AbortSignal.timeout(5000),
  };

  try {
    const response = await fetch(`${baseUrl}/api/products`, requestInit);
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const { products } = (await response.json()) as {
      products: StripeProductData[];
    };

    const activeProducts = await Promise.all(
      products
        .filter((product) => product.active)
        .map(async (product) => {
          try {
            const priceResponse = await fetch(
              `${baseUrl}/api/products/${product.id}`,
              requestInit,
            );
            if (!priceResponse.ok) {
              throw new Error(
                `Failed to fetch price for product ${product.id}: ${priceResponse.statusText}`,
              );
            }

            const { priceInfo } = (await priceResponse.json()) as {
              priceInfo: StripePriceData;
            };

            if (!priceInfo.unit_amount) {
              throw new Error(`Price for product ${product.id} is not defined`);
            }

            return {
              ...product,
              price: {
                ...priceInfo,
                formatted_price: formatStripeAmount(priceInfo.unit_amount),
              },
            };
          } catch (error) {
            console.error(
              `Error fetching price for product ${product.id}:`,
              error,
            );
            return null;
          }
        }),
    );

    return {
      products: activeProducts.filter(
        (p): p is StripeProductData => p !== null && p.price !== undefined,
      ),
    };
  } catch (error) {
    console.error("Error fetching Stripe products:", error);
    return { products: [] };
  }
}
