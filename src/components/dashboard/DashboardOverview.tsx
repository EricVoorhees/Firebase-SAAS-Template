"use client";

import { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faChartColumn,
  faCircleCheck,
  faClock,
  faCreditCard,
  faEnvelope,
  faGaugeHigh,
  faLayerGroup,
  faShieldHalved,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "@/lib/context/AuthContext";

const metrics = [
  {
    label: "Monthly recurring revenue",
    value: "$24,860",
    delta: "+12.5%",
    detail: "vs last month",
    icon: faChartColumn,
    accent: "text-[#0aa8c7]",
    surface: "bg-[#eef9fd]",
  },
  {
    label: "Active customers",
    value: "2,843",
    delta: "+8.1%",
    detail: "healthy growth",
    icon: faUsers,
    accent: "text-[#1ea2a7]",
    surface: "bg-[#eefaf8]",
  },
  {
    label: "Successful payments",
    value: "98.4%",
    delta: "+0.7%",
    detail: "payment reliability",
    icon: faCreditCard,
    accent: "text-[#f08a24]",
    surface: "bg-[#fff5ea]",
  },
  {
    label: "Operational readiness",
    value: "87%",
    delta: "+6 pts",
    detail: "launch checklist complete",
    icon: faShieldHalved,
    accent: "text-[#5d7df4]",
    surface: "bg-[#eef2ff]",
  },
] as const;

const recentActivity = [
  {
    title: "New Pro subscription created",
    body: "Acme Studio upgraded from Basic to Pro.",
    time: "6 minutes ago",
  },
  {
    title: "Trial account converted",
    body: "Northstar Labs converted after a 14 day trial.",
    time: "18 minutes ago",
  },
  {
    title: "Invoice delivered successfully",
    body: "Invoice INV-2098 was sent to jane@company.com.",
    time: "42 minutes ago",
  },
  {
    title: "Analytics event spike detected",
    body: "Checkout started events are up 14% today.",
    time: "1 hour ago",
  },
] as const;

const subscriptions = [
  ["Pro", "72%", "$17.9K"],
  ["Basic", "20%", "$5.1K"],
  ["Enterprise", "8%", "$1.8K"],
] as const;

const checklist = [
  "Connect Firebase auth providers",
  "Customize your Stripe billing portal",
  "Add product-specific dashboard modules",
  "Instrument activation and revenue events",
] as const;

const teamMembers = [
  ["Jane Cooper", "Product ops", "Owner"],
  ["Marcus Lee", "Growth", "Admin"],
  ["Nadia Wells", "Support", "Editor"],
] as const;

export default function DashboardOverview() {
  const { currentUser } = useAuth();

  const greetingLabel = useMemo(() => {
    if (currentUser?.displayName) return currentUser.displayName;
    if (currentUser?.email) return currentUser.email.split("@")[0];
    return "your team";
  }, [currentUser]);

  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6">
      <section className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        {metrics.map((item) => (
          <div
            key={item.label}
            className="rounded-[1.4rem] border border-black/7 bg-white p-4 shadow-[0_18px_36px_rgba(15,23,42,0.04)] sm:rounded-[1.65rem] sm:p-5"
          >
            <div className="flex items-center justify-between gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-[1rem] ${item.surface} ${item.accent} sm:h-16 sm:w-16 sm:rounded-[1.35rem]`}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-[1.15rem] sm:text-[1.45rem]"
                />
              </div>
              <span className="rounded-full bg-[#f7fafc] px-2.5 py-1 text-[10px] font-semibold text-[#0ea46c] sm:px-3 sm:text-xs">
                {item.delta}
              </span>
            </div>
            <p className="mt-4 text-xs text-black/42 sm:mt-5 sm:text-sm">
              {item.label}
            </p>
            <p className="mt-2 text-[1.7rem] font-semibold tracking-[-0.06em] text-black sm:text-[2.2rem]">
              {item.value}
            </p>
            <p className="mt-2 text-xs text-black/46 sm:text-sm">
              {item.detail}
            </p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.25fr)_360px]">
        <div className="rounded-[1.85rem] border border-black/7 bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.04)]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/34">
                Revenue overview
              </p>
              <h2 className="mt-2 text-[2rem] font-semibold tracking-[-0.05em] text-black">
                Revenue is trending up for {greetingLabel}
              </h2>
            </div>
            <div className="rounded-full border border-black/8 bg-[#fafaf8] px-4 py-2 text-sm font-medium text-black/48">
              Last 30 days
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[72px_minmax(0,1fr)]">
            <div className="flex flex-col justify-between text-xs text-black/28">
              <span>$40K</span>
              <span>$30K</span>
              <span>$20K</span>
              <span>$10K</span>
              <span>$0</span>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex flex-col justify-between">
                {[0, 1, 2, 3, 4].map((row) => (
                  <div
                    key={row}
                    className="border-t border-dashed border-black/8"
                  />
                ))}
              </div>

              <svg
                viewBox="0 0 920 320"
                className="relative h-[280px] w-full"
                aria-hidden="true"
              >
                <path
                  d="M20 232 C90 220, 150 188, 220 191 S356 150, 430 155 S565 116, 640 120 S780 82, 900 74"
                  fill="none"
                  stroke="#0aa8c7"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M20 248 C90 240, 154 220, 220 218 S354 192, 430 190 S566 166, 640 168 S780 150, 900 142"
                  fill="none"
                  stroke="#c7d0d8"
                  strokeWidth="5"
                  strokeDasharray="12 12"
                  strokeLinecap="round"
                />
                {[
                  [220, 191],
                  [430, 155],
                  [640, 120],
                  [900, 74],
                ].map(([x, y]) => (
                  <circle
                    key={`${x}-${y}`}
                    cx={x}
                    cy={y}
                    r="8"
                    fill="#0aa8c7"
                  />
                ))}
              </svg>

              <div className="mt-3 flex justify-between text-xs text-black/30">
                <span>Apr 28</span>
                <span>May 5</span>
                <span>May 12</span>
                <span>May 19</span>
                <span>May 26</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[1.85rem] border border-black/7 bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.04)]">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/34">
                Recent activity
              </p>
              <h2 className="mt-2 text-[1.65rem] font-semibold tracking-[-0.05em] text-black">
                What changed today
              </h2>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-[#eefaf8] text-[#1ea2a7]">
              <FontAwesomeIcon icon={faClock} className="text-[1.35rem]" />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            {recentActivity.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.2rem] border border-black/7 bg-[#fafaf8] p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0ea46c] shadow-[0_8px_18px_rgba(15,23,42,0.05)]">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-[1.1rem]"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-black">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-black/48">
                      {item.body}
                    </p>
                    <p className="mt-2 text-xs font-medium text-black/34">
                      {item.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="grid gap-6">
          <div className="rounded-[1.85rem] border border-black/7 bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.04)]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/34">
                  Subscription mix
                </p>
                <h2 className="mt-2 text-[1.65rem] font-semibold tracking-[-0.05em] text-black">
                  Plans driving revenue
                </h2>
              </div>
              <div className="relative h-24 w-24 rounded-full bg-[conic-gradient(#0aa8c7_0_72%,#dce5eb_72%_92%,#eff4f7_92%_100%)]">
                <div className="absolute inset-[14px] rounded-full bg-white" />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              {subscriptions.map(([plan, share, revenue]) => (
                <div
                  key={plan}
                  className="grid grid-cols-[1fr_auto_auto] items-center gap-4 rounded-[1.1rem] border border-black/7 px-4 py-3"
                >
                  <span className="text-sm font-medium text-black">{plan}</span>
                  <span className="text-sm text-black/48">{share}</span>
                  <span className="text-sm font-semibold text-black">
                    {revenue}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.85rem] border border-black/7 bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.04)]">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-[#fff5ea] text-[#f08a24]">
                <FontAwesomeIcon icon={faBolt} className="text-[1.35rem]" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/34">
                  Launch checklist
                </p>
                <h2 className="mt-2 text-[1.65rem] font-semibold tracking-[-0.05em] text-black">
                  Ship the polished version faster
                </h2>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              {checklist.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[1.1rem] bg-[#fafaf8] px-4 py-3"
                >
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0ea46c] shadow-[0_8px_16px_rgba(15,23,42,0.05)]">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-[0.95rem]"
                    />
                  </div>
                  <span className="text-sm leading-7 text-black/58">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-[1.85rem] border border-black/7 bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.04)]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/34">
                  Team access
                </p>
                <h2 className="mt-2 text-[1.65rem] font-semibold tracking-[-0.05em] text-black">
                  Roles aligned to operations
                </h2>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-[#eef2ff] text-[#5d7df4]">
                <FontAwesomeIcon
                  icon={faLayerGroup}
                  className="text-[1.35rem]"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              {teamMembers.map(([name, role, access]) => (
                <div
                  key={name}
                  className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-[1.15rem] border border-black/7 px-4 py-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-black">{name}</p>
                    <p className="mt-1 text-sm text-black/46">{role}</p>
                  </div>
                  <span className="rounded-full bg-[#fafaf8] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-black/46">
                    {access}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.85rem] border border-black/7 bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.04)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-[#eefaf8] text-[#1ea2a7]">
                <FontAwesomeIcon
                  icon={faGaugeHigh}
                  className="text-[1.35rem]"
                />
              </div>
              <h3 className="mt-5 text-[1.5rem] font-semibold tracking-[-0.05em] text-black">
                Health signals
              </h3>
              <p className="mt-2 text-sm leading-7 text-black/50">
                Payment success, activation rates, and support load are all
                trending in a healthy direction.
              </p>
              <div className="mt-5 rounded-[1rem] bg-[#fafaf8] px-4 py-3 text-sm font-medium text-black/58">
                Payment reliability is holding above 98%.
              </div>
            </div>

            <div className="rounded-[1.85rem] border border-black/7 bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.04)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-[#fff5ea] text-[#f08a24]">
                <FontAwesomeIcon icon={faEnvelope} className="text-[1.35rem]" />
              </div>
              <h3 className="mt-5 text-[1.5rem] font-semibold tracking-[-0.05em] text-black">
                Operator notes
              </h3>
              <p className="mt-2 text-sm leading-7 text-black/50">
                Keep product, billing, and support changes visible in one place
                instead of scattering them across disconnected tools.
              </p>
              <div className="mt-5 rounded-[1rem] bg-[#fafaf8] px-4 py-3 text-sm font-medium text-black/58">
                Next recommended step: tailor plan messaging for your product.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
