"use client";

import SpotlightCard from "@/components/reactbits/SpotlightCard";
import Link from "next/link";
import {
  faArrowRight,
  faChartColumn,
  faCreditCard,
  faFolderOpen,
  faLock,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cards = [
  {
    title: "Auth",
    description:
      "Secure sign up, sign in, and user management with Firebase Authentication.",
    icon: faLock,
    tone: "bg-[#fff5ea] text-[#f08a24]",
    span: "md:col-span-2",
  },
  {
    title: "Billing",
    description:
      "Subscriptions, one-time payments, and proration powered by Stripe.",
    icon: faCreditCard,
    tone: "bg-[#eef8ff] text-[#1d95d3]",
    span: "md:col-span-2",
  },
  {
    title: "Admin",
    description:
      "A clean admin dashboard to manage users, plans, and content.",
    icon: faSliders,
    tone: "bg-[#fff6ef] text-[#f08a24]",
    span: "md:col-span-2",
  },
  {
    title: "Analytics",
    description:
      "Track revenue, conversions, and user activity with built-in analytics.",
    icon: faChartColumn,
    tone: "bg-[#eefaf8] text-[#1ea2a7]",
    span: "md:col-span-3",
  },
  {
    title: "Content",
    description: "Create and manage pages, posts, and resources with ease.",
    icon: faFolderOpen,
    tone: "bg-[#fbf5ef] text-[#8f6234]",
    span: "md:col-span-3",
  },
] as const;

export default function ProductCapabilitiesSection() {
  return (
    <section
      id="stack"
      className="mx-auto flex w-full max-w-[1260px] flex-col gap-10 px-5 py-16 sm:px-6 lg:px-10 lg:py-24"
    >
      <div className="grid gap-10 lg:grid-cols-[440px_minmax(0,1fr)] lg:items-start lg:gap-12">
        <div className="flex max-w-[440px] flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="max-w-[14ch] text-balance text-[clamp(2.1rem,4.5vw,3.45rem)] font-semibold leading-[0.98] tracking-[-0.07em] text-black">
              Built for lean teams shipping real software
            </h2>
            <p className="max-w-[34rem] text-[0.98rem] leading-7 text-black/48 sm:text-base">
              Everything you need to launch and scale a SaaS without boilerplate
              or bloat. Focus on your product, not your plumbing.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(15,23,42,0.12)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Explore all features
            <FontAwesomeIcon icon={faArrowRight} className="text-[1.05rem]" />
          </Link>
        </div>

        <div className="grid gap-4 md:hidden">
          <div className="grid gap-4">
            {cards.map((card) => (
              <SpotlightCard
                key={card.title}
                spotlightColor="rgba(246, 175, 72, 0.12)"
                className="w-full border-black/8 bg-white p-5 text-left shadow-[0_18px_36px_rgba(15,23,42,0.05)]"
              >
                <div className="relative z-[1] flex h-full flex-col gap-5">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-[1.15rem] ${card.tone}`}
                  >
                    <FontAwesomeIcon icon={card.icon} className="text-[1.35rem]" />
                  </div>

                  <div className="flex flex-1 flex-col gap-3">
                    <h3 className="text-[1.4rem] font-semibold tracking-[-0.04em] text-black">
                      {card.title}
                    </h3>
                    <p className="max-w-[30ch] text-[0.95rem] leading-7 text-black/50">
                      {card.description}
                    </p>
                  </div>

                  <div className="flex justify-end pt-2 text-black/45">
                    <FontAwesomeIcon icon={faArrowRight} className="text-[1.05rem]" />
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        <div className="hidden gap-4 sm:gap-5 md:grid md:grid-cols-6">
          {cards.map((card) => (
            <SpotlightCard
              key={card.title}
              spotlightColor="rgba(246, 175, 72, 0.12)"
              className={`${card.span} border-black/8 bg-white p-5 text-left shadow-[0_18px_36px_rgba(15,23,42,0.05)] sm:p-6`}
            >
              <div className="relative z-[1] flex h-full flex-col gap-5">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-[1.15rem] ${card.tone} sm:h-[4.5rem] sm:w-[4.5rem] sm:rounded-[1.25rem]`}
                >
                  <FontAwesomeIcon icon={card.icon} className="text-[1.35rem] sm:text-[1.55rem]" />
                </div>

                <div className="flex flex-1 flex-col gap-3">
                  <h3 className="text-[1.4rem] font-semibold tracking-[-0.04em] text-black sm:text-[1.55rem]">
                    {card.title}
                  </h3>
                  <p className="max-w-[30ch] text-[0.95rem] leading-7 text-black/50 sm:text-base">
                    {card.description}
                  </p>
                </div>

                <div className="flex justify-end pt-2 text-black/45">
                  <FontAwesomeIcon icon={faArrowRight} className="text-[1.05rem]" />
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
