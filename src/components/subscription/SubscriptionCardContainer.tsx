"use client";

import { StripeProductData } from "@/lib/stripe/types/StripeProductData";
import SubscriptionCard from "./SubscriptionCard";

export default function SubscriptionCardContainer({
  products,
  salesCall,
}: {
  products: StripeProductData[];
  salesCall?: string;
}) {
  return (
    <section
      id="pricing"
      className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="max-w-3xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-black/40">
          Pricing
        </p>
        {salesCall && (
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-[0.97] tracking-[-0.05em] text-black sm:text-5xl">
            {salesCall}
          </h2>
        )}
        <p className="mt-5 text-base leading-7 text-black/62">
          Start with the plan that matches your product stage, then extend the
          foundation as your workflows become more specific.
        </p>
      </div>
      <div className="grid w-full max-w-5xl gap-6 md:grid-cols-2">
        {products.map((product: StripeProductData) => {
          return <SubscriptionCard key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
}
