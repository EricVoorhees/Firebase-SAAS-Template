import React from "react";

function DashboardPreview() {
  const metrics = [
    ["MRR", "$24.8K", "+12.5%"],
    ["Active users", "2,843", "+8.1%"],
    ["New signups", "156", "+15.3%"],
    ["Conversion", "3.12%", "+0.4%"],
  ] as const;

  const activity = [
    ["New user signed up", "2m ago"],
    ["Subscription created", "12m ago"],
    ["Payment succeeded", "14m ago"],
    ["Customer updated", "1h ago"],
  ] as const;

  return (
    <div className="relative mx-auto mt-12 w-full max-w-[760px] rounded-[2rem] border border-white/70 bg-white/90 p-4 shadow-[0_40px_100px_rgba(15,23,42,0.28)] backdrop-blur-[16px]">
      <div className="overflow-hidden rounded-[1.6rem] border border-black/8 bg-white">
        <div className="grid min-h-[420px] grid-cols-[170px_minmax(0,1fr)]">
          <aside className="border-r border-black/6 bg-[#f8fafb] px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-[0.95rem] bg-[radial-gradient(circle_at_30%_30%,#ffd36a_0%,#ff9a2f_44%,#ff5a2a_100%)]" />
              <div>
                <p className="text-[13px] font-semibold text-black">Firebase Saas</p>
                <p className="text-[10px] text-black/38">Overview</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              {["Overview", "Users", "Subscriptions", "Payments", "Analytics", "Settings"].map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center gap-3 rounded-[0.95rem] px-3 py-2.5 text-[12px] font-medium ${
                    index === 0
                      ? "bg-white text-black shadow-[0_10px_18px_rgba(15,23,42,0.08)]"
                      : "text-black/42"
                  }`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      index === 0 ? "bg-[#0aa8c7]" : "bg-black/14"
                    }`}
                  />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.2rem] border border-black/7 bg-white px-3 py-3 shadow-[0_10px_22px_rgba(15,23,42,0.05)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/28">
                Pro plan
              </p>
              <p className="mt-2 text-[12px] text-black/62">$49 / month</p>
              <div className="mt-3 rounded-full border border-black/8 px-3 py-2 text-center text-[11px] font-semibold text-black/54">
                Manage plan
              </div>
            </div>
          </aside>

          <div className="bg-[linear-gradient(180deg,#ffffff_0%,#fdfefe_100%)] px-5 py-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-[28px] font-semibold tracking-[-0.05em] text-black">
                  Overview
                </h3>
                <p className="mt-1 text-[12px] text-black/40">
                  Here&apos;s what&apos;s happening with your business.
                </p>
              </div>
              <div className="rounded-full border border-black/8 bg-[#fafafa] px-3 py-2 text-[11px] font-medium text-black/42">
                Apr 28 - May 28
              </div>
            </div>

            <div className="mt-5 grid grid-cols-4 gap-3">
              {metrics.map(([label, value, delta], index) => (
                <div
                  key={label}
                  className={`rounded-[1.1rem] border border-black/7 p-3 ${
                    index === 0 ? "bg-[#fbfefe]" : "bg-white"
                  }`}
                >
                  <p className="text-[10px] font-medium text-black/34">{label}</p>
                  <p className="mt-2 text-[22px] font-semibold tracking-[-0.05em] text-black">
                    {value}
                  </p>
                  <p className="mt-1 text-[10px] font-medium text-[#0ea46c]">{delta}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-[minmax(0,1.25fr)_220px] gap-4">
              <div className="rounded-[1.2rem] border border-black/7 bg-white p-4">
                <div className="flex items-center justify-between">
                  <p className="text-[12px] font-semibold text-black">Revenue</p>
                  <div className="flex items-center gap-4 text-[10px] text-black/34">
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-5 rounded-full bg-[#0aa8c7]" />
                      This month
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-5 rounded-full border-t border-dashed border-black/30" />
                      Last month
                    </span>
                  </div>
                </div>

                <div className="relative mt-4 h-[170px]">
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[0, 1, 2, 3].map((line) => (
                      <div key={line} className="border-t border-dashed border-black/7" />
                    ))}
                  </div>

                  <svg viewBox="0 0 520 180" className="relative h-full w-full" aria-hidden="true">
                    <path
                      d="M10 138 C70 128, 110 116, 165 120 S255 98, 308 102 S395 74, 510 48"
                      fill="none"
                      stroke="#0aa8c7"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 149 C66 142, 111 134, 165 136 S255 122, 308 124 S394 109, 510 94"
                      fill="none"
                      stroke="#c9d3db"
                      strokeWidth="4"
                      strokeDasharray="9 9"
                      strokeLinecap="round"
                    />
                    {[
                      [165, 120],
                      [308, 102],
                      [510, 48],
                    ].map(([x, y]) => (
                      <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="#0aa8c7" />
                    ))}
                  </svg>
                </div>
              </div>

              <div className="rounded-[1.2rem] border border-black/7 bg-white p-4">
                <p className="text-[12px] font-semibold text-black">Recent activity</p>
                <div className="mt-4 flex flex-col gap-3">
                  {activity.map(([title, time]) => (
                    <div key={title} className="rounded-[1rem] bg-[#fafafa] px-3 py-3">
                      <div className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0ea46c]" />
                        <div className="min-w-0">
                          <p className="text-[11px] font-semibold text-black">{title}</p>
                          <p className="mt-1 text-[10px] text-black/34">{time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-[1fr_210px] gap-4">
              <div className="rounded-[1.2rem] border border-black/7 bg-white p-4">
                <div className="flex items-center justify-between">
                  <p className="text-[12px] font-semibold text-black">Top products</p>
                  <p className="text-[10px] text-black/34">Revenue by plan</p>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    ["Basic plan", "1,093", "+3.4%"],
                    ["Pro plan", "850", "+8.1%"],
                    ["Enterprise", "124", "+1.2%"],
                  ].map(([label, value, delta]) => (
                    <div key={label} className="rounded-[1rem] bg-[#fbfbfb] px-3 py-3">
                      <p className="text-[10px] text-black/32">{label}</p>
                      <p className="mt-2 text-[15px] font-semibold text-black">{value}</p>
                      <p className="mt-1 text-[10px] font-medium text-[#0ea46c]">{delta}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.2rem] border border-black/7 bg-white p-4">
                <div className="mx-auto flex h-[118px] w-[118px] items-center justify-center rounded-full bg-[conic-gradient(#0aa8c7_0_72%,#dce5eb_72%_92%,#eff4f7_92%_100%)]">
                  <div className="flex h-[78px] w-[78px] items-center justify-center rounded-full bg-white text-[11px] font-semibold text-black/52">
                    Plans
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AuthShowcase({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="relative h-[780px] w-full max-w-[980px] overflow-hidden rounded-[2.4rem] border border-[#b9ddff] bg-[#7fc0f7] shadow-[0_40px_100px_rgba(15,23,42,0.2)] sm:h-[820px] xl:h-[860px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/auth-garden-scene.png')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,118,214,0.04)_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[26%] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(126,196,247,0.08)_52%,rgba(32,122,219,0.12)_100%)]" />
      <div className="absolute inset-y-0 left-0 w-[22%] bg-[linear-gradient(90deg,rgba(66,149,229,0.08)_0%,rgba(255,255,255,0)_100%)]" />
      <div className="absolute inset-y-0 right-0 w-[18%] bg-[linear-gradient(270deg,rgba(70,152,229,0.08)_0%,rgba(255,255,255,0)_100%)]" />

      <div className="relative z-[1] mx-auto flex h-full max-w-[860px] flex-col items-center px-10 pb-10 pt-20 text-center text-white sm:px-12">
        <h2 className="max-w-[520px] text-balance text-[2.85rem] font-semibold leading-[1.05] tracking-[-0.06em] sm:text-[3.35rem]">
          {title}
        </h2>
        <p className="mt-5 max-w-[610px] text-[1.05rem] leading-8 text-white/95 sm:text-[1.14rem]">
          {body}
        </p>

        <DashboardPreview />

        <div className="mt-auto flex items-center gap-3 pt-8">
          <span className="h-3.5 w-3.5 rounded-full bg-white" />
          <span className="h-3.5 w-3.5 rounded-full bg-white/38" />
          <span className="h-3.5 w-3.5 rounded-full bg-white/38" />
          <span className="h-3.5 w-3.5 rounded-full bg-white/38" />
        </div>
      </div>
    </div>
  );
}
