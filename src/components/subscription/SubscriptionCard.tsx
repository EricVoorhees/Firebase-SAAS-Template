"use client";

import { StripeProductData } from "@/lib/stripe/types/StripeProductData";
import PurchaseButton from "./PurchaseButton";

/**
 * Adjust this map to match your plan names and product features you'd like to display
 */
const featuresMap: Record<string, string[]> = {
  "Basic Plan": [
    "Firebase auth and route protection",
    "Stripe checkout and subscriptions",
    "Starter dashboard and account flows",
  ],
  "Premium Plan": [
    "Everything in Basic",
    "Expanded billing and customer controls",
    "Richer admin and upgrade surfaces",
    "More room for production customization",
  ],
};

export default function SubscriptionCard({
  product,
}: {
  product: StripeProductData;
}) {
  const { name, metadata, price } = product;
  const featureList = featuresMap[name] ?? [
    product.description || "Core Firebase SaaS foundation",
    metadata.firebaseRole
      ? `${metadata.firebaseRole} role configuration`
      : "Role-aware product access",
    "Checkout, portal, and upgrade flows",
  ];

  return (
    <div
      className={`${
        metadata.popular === "true"
          ? "border-black bg-black text-white shadow-[0_28px_80px_rgba(15,23,42,0.18)]"
          : "border-black/8 bg-white text-black shadow-[0_20px_60px_rgba(15,23,42,0.07)]"
      } relative w-full overflow-hidden rounded-[2rem] border p-7`}
    >
      {metadata.popular === "true" && (
        <div className="absolute right-6 top-0 rounded-b-2xl bg-[#ffb85c] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-black">
          <span>Popular</span>
        </div>
      )}
      <div className="flex h-full flex-col">
        <div className="pb-6">
          <p
            className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${
              metadata.popular === "true" ? "text-white/50" : "text-black/40"
            }`}
          >
            {metadata.firebaseRole || "Plan"}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
            {name || "Loading..."}
          </h2>
          <p
            className={`mt-2 text-sm leading-6 ${
              metadata.popular === "true" ? "text-white/72" : "text-black/58"
            }`}
          >
            {product.description || "A clean foundation for Firebase product work."}
          </p>
        </div>

        <div className="mb-6 border-y border-current/10 py-6">
          <p
            className={`text-4xl font-semibold tracking-[-0.05em] ${
              metadata.popular === "true" ? "text-white" : "text-black"
            }`}
          >
            {price?.formatted_price
              ? `${price.formatted_price}`
              : "Loading price..."}
            <span
              className={`ml-1 text-base font-medium ${
                metadata.popular === "true" ? "text-white/55" : "text-black/45"
              }`}
            >
              /month
            </span>
          </p>
        </div>

        <ul className="flex h-full flex-col items-start justify-start gap-3 pb-8">
          {featureList.map((feature: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className={`mt-0.5 h-5 w-5 ${
                  metadata.popular === "true" ? "text-[#ffb85c]" : "text-[#f08a24]"
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <span
                className={`text-sm leading-6 ${
                  metadata.popular === "true" ? "text-white/78" : "text-black/66"
                }`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex justify-start">
          {price?.id && (
            <PurchaseButton
              priceId={price.id}
              buttonText={metadata.buttonText}
              popular={metadata.popular === "true"}
            />
          )}
        </div>
      </div>
    </div>
  );
}
