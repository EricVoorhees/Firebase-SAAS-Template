import Image from "next/image";
import { siteConfig } from "@/lib/site";

const featureRows = [
  {
    title: "Secure authentication",
    description:
      "Email/password, social logins, email verification, and password resets out of the box.",
    tone: "bg-[#eefaf8] text-[#1ea2a7]",
    icon: "users",
    preview: "auth",
  },
  {
    title: "Flexible billing",
    description:
      "Multiple pricing plans, coupons, trials, usage limits, and dunning management.",
    tone: "bg-[#fff5ea] text-[#f08a24]",
    icon: "card",
    preview: "billing",
  },
  {
    title: "Actionable analytics",
    description:
      "Revenue charts, cohort insights, and product metrics to grow with confidence.",
    tone: "bg-[#eefaf8] text-[#0aa8c7]",
    icon: "chart",
    preview: "analytics",
  },
] as const;

function FeatureGlyph({ type }: { type: "users" | "card" | "chart" }) {
  if (type === "users") {
    return (
      <svg viewBox="0 0 64 64" className="h-[4.5rem] w-[4.5rem]" fill="none" aria-hidden="true">
        <path
          d="M20 26c0-5 4-9 9-9s9 4 9 9-4 9-9 9-9-4-9-9Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 48c2-6 8-10 16-10s14 4 16 10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M42 23c1-4 4-6 8-6 5 0 9 4 9 9 0 4-3 8-7 9"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "card") {
    return (
      <svg viewBox="0 0 64 64" className="h-[4.5rem] w-[4.5rem]" fill="none" aria-hidden="true">
        <rect
          x="8"
          y="16"
          width="48"
          height="32"
          rx="8"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M8 26h48"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M18 38h12"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" className="h-[4.5rem] w-[4.5rem]" fill="none" aria-hidden="true">
      <path
        d="M14 48V30"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M32 48V18"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M50 48V24"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AuthPreview() {
  return (
    <div className="rounded-[1.55rem] border border-black/8 bg-white p-6 shadow-[0_20px_44px_rgba(15,23,42,0.05)]">
      <p className="text-sm font-semibold text-black">Welcome back</p>
      <p className="mt-1 text-xs text-black/38">Sign in to your account</p>

      <button className="mt-5 flex w-full items-center justify-center gap-3 rounded-xl border border-black/10 px-4 py-3 text-sm font-medium text-black/72">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] shadow-[0_2px_8px_rgba(15,23,42,0.08)]">
          G
        </span>
        Continue with Google
      </button>

      <div className="mt-4 flex items-center gap-3 text-xs text-black/28">
        <div className="h-px flex-1 bg-black/8" />
        <span>or</span>
        <div className="h-px flex-1 bg-black/8" />
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <div className="rounded-xl border border-black/8 px-4 py-3 text-sm text-black/38">
          Email address
        </div>
        <div className="rounded-xl border border-black/8 px-4 py-3 text-sm text-black/38">
          Password
        </div>
      </div>
    </div>
  );
}

function BillingPreview() {
  return (
    <div className="rounded-[1.55rem] border border-black/8 bg-white p-6 shadow-[0_20px_44px_rgba(15,23,42,0.05)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-black">Choose your plan</p>
          <p className="mt-3 text-[2.2rem] font-semibold tracking-[-0.06em] text-black">
            Pro
          </p>
          <p className="text-sm text-black/44">$49 / month</p>
        </div>
        <div className="flex items-center gap-3 rounded-full bg-[#f6f7f9] px-3 py-2 text-xs font-medium text-black/42">
          Yearly
          <span className="flex h-5 w-9 items-center rounded-full bg-[#0aa8c7] p-1">
            <span className="ml-auto h-3.5 w-3.5 rounded-full bg-white" />
          </span>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 text-sm text-black/62">
        <span>Everything in Basic, plus:</span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#0aa8c7]" />
          Advanced analytics
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#0aa8c7]" />
          Priority support
        </span>
      </div>

      <button className="mt-6 w-full rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white">
        Subscribe
      </button>
    </div>
  );
}

function AnalyticsPreview() {
  return (
    <div className="rounded-[1.55rem] border border-black/8 bg-white p-6 shadow-[0_20px_44px_rgba(15,23,42,0.05)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-black">MRR over time</p>
          <p className="mt-1 text-xs text-black/38">
            This month versus last month
          </p>
        </div>
        <div className="rounded-xl border border-black/8 px-3 py-2 text-xs font-medium text-black/45">
          30 days
        </div>
      </div>

      <div className="mt-5 flex items-center gap-4 text-xs text-black/42">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#0aa8c7]" />
          This month
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-black/14" />
          Last month
        </span>
      </div>

      <svg viewBox="0 0 520 160" className="mt-5 h-[140px] w-full" aria-hidden="true">
        <path
          d="M10 120 C60 118, 110 95, 160 96 S250 78, 302 84 S400 66, 510 72"
          fill="none"
          stroke="#0aa8c7"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M10 130 C60 126, 110 118, 160 119 S250 106, 302 108 S400 100, 510 98"
          fill="none"
          stroke="#c9d0d7"
          strokeWidth="3"
          strokeDasharray="8 8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function FoundationPreview() {
  const leftNodes = ["Auth", "Database", "Storage"] as const;
  const rightNodes = ["Functions", "Stripe", "Analytics"] as const;

  return (
    <div className="flex min-h-[320px] items-center justify-center rounded-[1.75rem] border border-[#f2e7d4] bg-[radial-gradient(circle_at_center,rgba(255,248,239,0.95),rgba(255,255,255,0.92))] px-6 py-8">
      <div className="relative flex w-full max-w-[520px] items-center justify-center">
        <div className="absolute left-0 top-1/2 flex -translate-y-1/2 flex-col gap-4">
          {leftNodes.map((item, index) => (
            <div
              key={item}
              className="relative rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black/62 shadow-[0_10px_20px_rgba(15,23,42,0.04)]"
              style={{ marginLeft: `${index * 10}px` }}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="absolute right-0 top-1/2 flex -translate-y-1/2 flex-col gap-4">
          {rightNodes.map((item, index) => (
            <div
              key={item}
              className="relative rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black/62 shadow-[0_10px_20px_rgba(15,23,42,0.04)]"
              style={{ marginRight: `${index * 10}px` }}
            >
              {item}
            </div>
          ))}
        </div>

        <svg
          viewBox="0 0 520 220"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <path
            d="M120 50 C180 50, 170 88, 220 88"
            fill="none"
            stroke="#b0a38f"
            strokeWidth="2"
            strokeDasharray="5 6"
          />
          <path
            d="M126 110 C190 110, 176 110, 222 110"
            fill="none"
            stroke="#b0a38f"
            strokeWidth="2"
            strokeDasharray="5 6"
          />
          <path
            d="M132 170 C186 170, 176 132, 222 132"
            fill="none"
            stroke="#b0a38f"
            strokeWidth="2"
            strokeDasharray="5 6"
          />
          <path
            d="M300 88 C350 88, 338 50, 398 50"
            fill="none"
            stroke="#b0a38f"
            strokeWidth="2"
            strokeDasharray="5 6"
          />
          <path
            d="M300 110 C348 110, 348 110, 392 110"
            fill="none"
            stroke="#b0a38f"
            strokeWidth="2"
            strokeDasharray="5 6"
          />
          <path
            d="M300 132 C350 132, 344 170, 396 170"
            fill="none"
            stroke="#b0a38f"
            strokeWidth="2"
            strokeDasharray="5 6"
          />
        </svg>

        <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-[radial-gradient(circle,rgba(255,220,160,0.45),rgba(255,255,255,0))]">
          <Image
            src={siteConfig.logoPath}
            alt={`${siteConfig.name} flame mark`}
            width={160}
            height={160}
            className="rounded-[2rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default function LaunchWorkflowSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1260px] flex-col gap-12 px-5 py-16 sm:px-6 lg:gap-14 lg:px-10 lg:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-sm font-semibold text-[#f08a24]">Everything you need</p>
        <h2 className="max-w-[760px] text-balance text-[clamp(2.15rem,6.5vw,4.5rem)] font-semibold leading-[1] tracking-[-0.07em] text-black">
          Production-ready features so you can ship faster
        </h2>
      </div>

      <div className="flex flex-col gap-0 rounded-[2rem] border border-black/6 bg-white">
        {featureRows.map((row, index) => (
          <div
            key={row.title}
            className={`grid gap-6 px-5 py-6 sm:px-6 sm:py-8 lg:grid-cols-[100px_minmax(0,0.9fr)_minmax(320px,1fr)] lg:items-center lg:gap-8 lg:px-10 ${
              index > 0 ? "border-t border-black/6" : ""
            }`}
          >
            <div
              className={`flex h-20 w-20 items-center justify-center rounded-[1.4rem] ${row.tone} sm:h-24 sm:w-24 sm:rounded-[1.7rem] lg:h-28 lg:w-28 lg:rounded-[2rem]`}
            >
              <FeatureGlyph type={row.icon} />
            </div>

            <div className="flex max-w-[340px] flex-col gap-3 sm:gap-4">
              <h3 className="text-[1.6rem] font-semibold tracking-[-0.05em] text-black sm:text-[1.85rem] lg:text-[2rem]">
                {row.title}
              </h3>
              <p className="text-[0.98rem] leading-7 text-black/50 sm:text-base">{row.description}</p>
            </div>

            {row.preview === "auth" ? (
              <AuthPreview />
            ) : row.preview === "billing" ? (
              <BillingPreview />
            ) : (
              <AnalyticsPreview />
            )}
          </div>
        ))}
      </div>

      <section
        id="pricing"
        className="rounded-[2rem] border border-[#f1e6d3] bg-[linear-gradient(180deg,#fffdfa_0%,#fff9f1_100%)] p-5 shadow-[0_24px_44px_rgba(15,23,42,0.04)] sm:p-6 lg:rounded-[2.4rem] lg:p-8"
      >
        <div className="grid gap-8 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-center">
          <div className="flex flex-col gap-5">
            <h3 className="max-w-[360px] text-balance text-[2.2rem] font-semibold leading-[0.98] tracking-[-0.07em] text-black sm:text-[2.45rem] lg:text-[2.65rem]">
              Start your next SaaS the right way
            </h3>
            <p className="max-w-[300px] text-[0.98rem] leading-7 text-black/48 sm:text-base">
              Skip the boilerplate. Launch faster with a foundation that&apos;s
              built to scale.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(15,23,42,0.12)]">
                Start building
              </button>
              <button className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-black">
                View demo
              </button>
            </div>
          </div>

          <FoundationPreview />
        </div>
      </section>
    </section>
  );
}
