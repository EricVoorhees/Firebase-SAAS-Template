import Image from "next/image";
import Link from "next/link";
import GetStartedButton from "../shared/GetStartedButton";
import { siteConfig } from "@/lib/site";

const metricCards = [
  { label: "MRR", value: "$24,860", delta: "+12.5% from last month" },
  { label: "Active users", value: "2,843", delta: "+8.1% from last month" },
  { label: "New signups", value: "156", delta: "+15.3% from last month" },
  { label: "Conversion rate", value: "3.12%", delta: "+0.4% from last month" },
] as const;

const recentActivity = [
  ["New user signed up", "2m ago"],
  ["Subscription created", "12m ago"],
  ["Payment succeeded", "14m ago"],
  ["Customer updated billing", "1h ago"],
] as const;

const topProducts = [
  ["Basic Plan", "1,093", "+3.4%"],
  ["Pro Plan", "860", "+8.7%"],
] as const;

function MobileHeroPreview() {
  return (
    <div className="w-full max-w-[360px] rounded-[2.2rem] border-[6px] border-[#111111] bg-[#111111] p-[7px] shadow-[0_28px_56px_rgba(15,23,42,0.16)]">
      <div className="relative mx-auto h-5 w-28 rounded-b-[15px] bg-[#0b0b0b]" />
      <div className="overflow-hidden rounded-[1.7rem] bg-[#fbfbfa]">
        <div className="grid grid-cols-[76px_minmax(0,1fr)]">
          <aside className="border-r border-black/6 bg-[#f9f9f7] px-2 py-3">
            <div className="flex flex-col gap-3">
              <div className="h-4 w-4 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffd36a_0%,#ff9a2f_44%,#ff5a2a_100%)]" />
              <div className="rounded-full bg-white py-2 shadow-[0_10px_18px_rgba(15,23,42,0.06)]" />
              <div className="rounded-full bg-white/70 py-2" />
            </div>
          </aside>

          <div className="px-3 py-3 text-left">
            <div className="flex items-center justify-between gap-2">
              <div>
                <h3 className="text-[1.1rem] font-semibold tracking-[-0.04em] text-black">
                  Overview
                </h3>
                <p className="mt-1 text-[10px] text-black/42">
                  Here&apos;s what&apos;s happening with your business.
                </p>
              </div>
              <div className="rounded-lg border border-black/8 bg-white px-2 py-1 text-[10px] font-medium text-black/55">
                Apr 28 - May 28
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {metricCards.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[0.95rem] border border-black/7 bg-white p-2.5 shadow-[0_10px_20px_rgba(15,23,42,0.04)]"
                >
                  <p className="text-[9px] text-black/36">{item.label}</p>
                  <p className="mt-1.5 text-[1.05rem] font-semibold tracking-[-0.04em] text-black">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[9px] font-medium text-[#0ea46c]">
                    {item.delta}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-[1rem] border border-black/7 bg-white p-3 shadow-[0_10px_20px_rgba(15,23,42,0.04)]">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-black">Revenue</p>
                  <p className="mt-1 text-[10px] text-black/40">
                    This month compared with last month
                  </p>
                </div>
                <div className="h-2.5 w-2.5 rounded-full bg-[#0aa8c7]" />
              </div>

              <svg
                viewBox="0 0 280 120"
                className="mt-3 h-[110px] w-full"
                aria-hidden="true"
              >
                <path
                  d="M10 85 C50 80, 75 72, 110 73 S160 60, 195 61 S235 48, 270 40"
                  fill="none"
                  stroke="#0aa8c7"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M10 93 C50 90, 75 84, 110 84 S160 77, 195 78 S235 72, 270 68"
                  fill="none"
                  stroke="#c7ccd4"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="overview"
      className="relative mx-auto flex w-full max-w-[1260px] flex-col items-center overflow-hidden px-5 pb-8 pt-10 text-center sm:px-6 lg:px-10 lg:pb-10 lg:pt-16"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,rgba(246,202,133,0.22),transparent_62%)]" />

      <div className="relative z-[1] flex max-w-[1040px] flex-col items-center gap-6 sm:gap-7">
        <h1 className="max-w-[980px] text-balance text-[clamp(2.95rem,11.4vw,5.45rem)] font-semibold leading-[0.98] tracking-[-0.08em] text-black">
          Launch Firebase products with a production-ready SaaS foundation
        </h1>

        <p className="max-w-[710px] text-balance text-[1rem] leading-[1.75] text-black/52 sm:text-[1.18rem] lg:text-[1.28rem]">
          Ship auth, billing, admin workflows, and analytics faster with a clean
          Next.js + Firebase + Stripe starter built for real products.
        </p>

        <div className="flex w-full max-w-[420px] flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
          <GetStartedButton
            label="Start building"
            className="w-full min-w-[198px] sm:w-auto"
          />
          <Link
            href="/app/dashboard"
            className="inline-flex w-full min-w-[198px] items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-black transition-colors duration-200 hover:border-black/18 hover:bg-black/[0.02] sm:w-auto"
          >
            View demo
          </Link>
        </div>
      </div>

      <div className="relative z-[1] mt-12 flex w-full justify-center sm:mt-14 lg:mt-16">
        <div className="sm:hidden">
          <MobileHeroPreview />
        </div>

        <div className="hidden w-full max-w-[1120px] sm:block">
          <div className="relative rounded-[2rem] border-[6px] border-[#111111] bg-[#111111] p-[8px] shadow-[0_38px_72px_rgba(15,23,42,0.16)] sm:rounded-[2.35rem] sm:border-[7px] sm:p-[10px] sm:shadow-[0_50px_90px_rgba(15,23,42,0.16)]">
            <div className="absolute left-1/2 top-0 h-5 w-28 -translate-x-1/2 rounded-b-[16px] bg-[#0b0b0b] sm:h-6 sm:w-36 sm:rounded-b-[18px]" />

            <div className="overflow-hidden rounded-[1.8rem] bg-[#fbfbfa]">
              <div className="grid min-h-[420px] grid-cols-[94px_minmax(0,1fr)] sm:min-h-[620px] sm:grid-cols-[230px_minmax(0,1fr)]">
                <aside className="flex flex-col justify-between border-r border-black/6 bg-[#f9f9f7] px-2 py-3 text-left sm:px-6 sm:py-7">
                  <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Image
                        src={siteConfig.logoPath}
                        alt={`${siteConfig.name} logo`}
                        width={24}
                        height={24}
                        className="rounded-md sm:h-11 sm:w-11 sm:rounded-xl"
                      />
                      <span className="hidden text-[1.05rem] font-semibold text-black/82 sm:inline">
                        Firebase Saas
                      </span>
                    </div>

                    <nav className="flex flex-col gap-2 text-[11px] text-black/46 sm:gap-3 sm:text-sm">
                      {[
                        "Overview",
                        "Users",
                        "Subscriptions",
                        "Payments",
                        "Products",
                        "Content",
                        "Analytics",
                        "Settings",
                      ].map((item, index) => (
                        <div
                          key={item}
                          className={`flex items-center gap-2 rounded-lg px-2 py-2 sm:gap-3 sm:rounded-xl sm:px-3 sm:py-2.5 ${
                            index === 0
                              ? "bg-white font-medium text-black shadow-[0_14px_34px_rgba(15,23,42,0.06)]"
                              : ""
                          }`}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-black/18" />
                          <span className="hidden sm:inline">{item}</span>
                        </div>
                      ))}
                    </nav>
                  </div>

                  <div className="flex flex-col gap-3 sm:gap-5">
                    <div className="hidden rounded-[1.15rem] border border-black/7 bg-white p-4 shadow-[0_18px_34px_rgba(15,23,42,0.05)] sm:block">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-black/35">
                            Pro Plan
                          </p>
                          <p className="mt-2 text-sm font-semibold text-black">
                            $49 / month
                          </p>
                        </div>
                      </div>
                      <button className="mt-4 w-full rounded-xl border border-black/8 px-3 py-2 text-sm font-medium text-black/74">
                        Manage plan
                      </button>
                    </div>

                    <div className="flex items-center gap-2 rounded-[0.9rem] border border-black/6 bg-white px-2 py-2 sm:gap-3 sm:rounded-[1rem] sm:px-3 sm:py-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f3f4f6] text-[10px] font-semibold text-black/70 sm:h-10 sm:w-10 sm:text-sm">
                        JC
                      </div>
                      <div className="hidden text-left sm:block">
                        <p className="text-sm font-medium text-black">
                          Jane Cooper
                        </p>
                        <p className="text-xs text-black/45">jane@acme.com</p>
                      </div>
                    </div>
                  </div>
                </aside>

                <div className="flex flex-col gap-3 px-3 py-3 text-left sm:gap-6 sm:px-7 sm:py-7">
                  <div className="flex flex-wrap items-start justify-between gap-3 sm:gap-4">
                    <div>
                      <h2 className="text-[1.15rem] font-semibold tracking-[-0.04em] text-black sm:text-[2rem]">
                        Overview
                      </h2>
                      <p className="mt-1 text-[10px] text-black/42 sm:text-sm">
                        Here&apos;s what&apos;s happening with your business.
                      </p>
                    </div>
                    <div className="rounded-lg border border-black/8 bg-white px-2 py-1.5 text-[10px] font-medium text-black/55 sm:rounded-xl sm:px-3 sm:py-2 sm:text-xs">
                      Apr 28 - May 28
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-4">
                    {metricCards.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[0.9rem] border border-black/7 bg-white p-2.5 shadow-[0_14px_34px_rgba(15,23,42,0.04)] sm:rounded-[1.15rem] sm:p-4"
                      >
                        <p className="text-[10px] text-black/36 sm:text-xs">
                          {item.label}
                        </p>
                        <p className="mt-2 text-[1rem] font-semibold tracking-[-0.04em] text-black sm:mt-3 sm:text-[1.9rem]">
                          {item.value}
                        </p>
                        <p className="mt-1 text-[10px] font-medium text-[#0ea46c] sm:mt-2 sm:text-xs">
                          {item.delta}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_310px]">
                    <div className="rounded-[1.25rem] border border-black/7 bg-white p-5 shadow-[0_16px_34px_rgba(15,23,42,0.04)]">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-black">
                            Revenue
                          </p>
                          <p className="mt-1 text-xs text-black/38">
                            This month compared with last month
                          </p>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-black/42">
                          <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-[#0aa8c7]" />
                            This month
                          </span>
                          <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-black/18" />
                            Last month
                          </span>
                        </div>
                      </div>

                      <div className="mt-6 flex h-[220px] items-end gap-4">
                        <div className="flex h-full flex-col justify-between text-[11px] text-black/28">
                          <span>$40K</span>
                          <span>$30K</span>
                          <span>$20K</span>
                          <span>$10K</span>
                          <span>$0</span>
                        </div>

                        <div className="relative flex-1">
                          <div className="absolute inset-0 flex flex-col justify-between">
                            {[0, 1, 2, 3, 4].map((row) => (
                              <div
                                key={row}
                                className="border-t border-dashed border-black/8"
                              />
                            ))}
                          </div>

                          <svg
                            viewBox="0 0 520 220"
                            className="relative h-full w-full"
                            aria-hidden="true"
                          >
                            <path
                              d="M20 168 C70 158, 105 142, 148 145 S226 118, 272 122 S352 95, 400 102 S458 74, 500 62"
                              fill="none"
                              stroke="#0aa8c7"
                              strokeWidth="4"
                              strokeLinecap="round"
                            />
                            <path
                              d="M20 176 C70 171, 104 160, 148 162 S224 144, 272 145 S352 134, 400 136 S456 126, 500 116"
                              fill="none"
                              stroke="#c7ccd4"
                              strokeWidth="3"
                              strokeDasharray="7 8"
                              strokeLinecap="round"
                            />
                            {[
                              [148, 145],
                              [272, 122],
                              [400, 102],
                              [500, 62],
                            ].map(([x, y]) => (
                              <circle
                                key={`${x}-${y}`}
                                cx={x}
                                cy={y}
                                r="5"
                                fill="#0aa8c7"
                              />
                            ))}
                          </svg>

                          <div className="mt-3 flex justify-between text-[11px] text-black/30">
                            <span>Apr 28</span>
                            <span>May 5</span>
                            <span>May 12</span>
                            <span>May 19</span>
                            <span>May 26</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[1.25rem] border border-black/7 bg-white p-5 shadow-[0_16px_34px_rgba(15,23,42,0.04)]">
                      <p className="text-sm font-semibold text-black">
                        Recent activity
                      </p>
                      <div className="mt-4 flex flex-col gap-4">
                        {recentActivity.map(([event, time]) => (
                          <div
                            key={event}
                            className="flex items-center justify-between gap-4 rounded-[1rem] border border-black/6 px-4 py-3"
                          >
                            <div className="flex items-center gap-3">
                              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f7fa]">
                                <span className="h-2 w-2 rounded-full bg-black/28" />
                              </span>
                              <span className="text-sm text-black/72">
                                {event}
                              </span>
                            </div>
                            <span className="text-xs text-black/34">
                              {time}
                            </span>
                          </div>
                        ))}
                      </div>
                      <button className="mt-5 w-full rounded-xl border border-black/8 px-4 py-3 text-sm font-medium text-black/70">
                        View all activity
                      </button>
                    </div>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_270px]">
                    <div className="rounded-[1.25rem] border border-black/7 bg-white p-5 shadow-[0_16px_34px_rgba(15,23,42,0.04)]">
                      <p className="text-sm font-semibold text-black">
                        Top products
                      </p>
                      <div className="mt-4 flex flex-col gap-4">
                        {topProducts.map(([name, value, delta]) => (
                          <div
                            key={name}
                            className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-black/6 pb-4 last:border-b-0 last:pb-0"
                          >
                            <span className="text-sm text-black/68">
                              {name}
                            </span>
                            <span className="text-sm font-medium text-black">
                              {value}
                            </span>
                            <span className="text-xs font-medium text-[#0ea46c]">
                              {delta}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.25rem] border border-black/7 bg-white p-5 shadow-[0_16px_34px_rgba(15,23,42,0.04)]">
                      <p className="text-sm font-semibold text-black">
                        Revenue by plan
                      </p>
                      <div className="mt-5 flex items-center gap-5">
                        <div className="relative h-28 w-28 rounded-full bg-[conic-gradient(#0aa8c7_0_72%,#dbe5ea_72%_92%,#f0f4f7_92%_100%)]">
                          <div className="absolute inset-[16px] rounded-full bg-white" />
                        </div>
                        <div className="flex flex-col gap-3 text-sm text-black/62">
                          <span className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#0aa8c7]" />
                            Pro Plan 72%
                          </span>
                          <span className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#dbe5ea]" />
                            Basic Plan 20%
                          </span>
                          <span className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#edf2f6]" />
                            Enterprise 8%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto h-5 w-[94%] rounded-b-[1.4rem] bg-[linear-gradient(180deg,#5a5b61_0%,#202227_55%,#111111_100%)] shadow-[0_20px_28px_rgba(15,23,42,0.14)] sm:h-7 sm:rounded-b-[2rem] sm:shadow-[0_30px_40px_rgba(15,23,42,0.14)]" />
          <div className="mx-auto mt-1 h-2 w-[64%] rounded-full bg-black/18 blur-[1px] sm:h-3" />
        </div>
      </div>
    </section>
  );
}
