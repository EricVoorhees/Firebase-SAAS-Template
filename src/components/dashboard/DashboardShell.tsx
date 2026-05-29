"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faBell,
  faBolt,
  faChartColumn,
  faChevronRight,
  faCreditCard,
  faFolderOpen,
  faHouse,
  faLock,
  faPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "@/lib/context/AuthContext";
import { hasFirebaseClientConfig } from "@/lib/firebase/firebaseClient";
import { siteConfig } from "@/lib/site";

const navItems = [
  { label: "Overview", icon: faHouse, href: "/app/dashboard", active: true },
  { label: "Customers", icon: faUsers, href: "#", active: false },
  { label: "Billing", icon: faCreditCard, href: "#", active: false },
  { label: "Content", icon: faFolderOpen, href: "#", active: false },
  { label: "Analytics", icon: faChartColumn, href: "#", active: false },
  { label: "Security", icon: faLock, href: "#", active: false },
] as const;

function deriveUserLabel(input: string | null | undefined) {
  if (!input) return "Product team";

  const trimmed = input.trim();
  if (!trimmed) return "Product team";

  return trimmed;
}

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentUser } = useAuth();

  const userName = deriveUserLabel(
    currentUser?.displayName ?? currentUser?.email?.split("@")[0],
  );

  return (
    <div className="min-h-screen bg-[#f6f7f3] text-black">
      <div className="grid min-h-screen lg:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="border-b border-black/6 bg-white px-4 py-4 sm:px-5 sm:py-6 lg:border-b-0 lg:border-r">
          <Link
            href="/"
            className="flex items-center gap-3 px-2 text-[1.65rem] font-semibold tracking-[-0.05em] text-black sm:px-3 sm:text-[1.9rem]"
          >
            <Image
              src={siteConfig.logoPath}
              alt={`${siteConfig.name} logo`}
              width={44}
              height={44}
              className="rounded-xl sm:h-[60px] sm:w-[60px] sm:rounded-2xl"
            />
            <span>{siteConfig.name}</span>
          </Link>

          <div className="mt-5 rounded-[1.35rem] border border-black/7 bg-[linear-gradient(180deg,#fff9ef_0%,#ffffff_100%)] p-4 shadow-[0_18px_36px_rgba(15,23,42,0.04)] sm:mt-8 sm:rounded-[1.5rem]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold tracking-[-0.03em] text-black">
                  Workspace
                </p>
                <p className="mt-1 text-xs text-black/44">
                  {hasFirebaseClientConfig && currentUser
                    ? "Authenticated session"
                    : "Preview mode"}
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-[#fff1db] text-[#f08a24] sm:h-14 sm:w-14 sm:rounded-[1.2rem]">
                <FontAwesomeIcon icon={faBolt} className="text-[1.35rem]" />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-[1rem] bg-white px-3 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3f4f6] text-sm font-semibold text-black/70">
                {userName.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-medium text-black">{userName}</p>
                <p className="text-xs text-black/42">
                  {currentUser?.email ?? "Local product preview"}
                </p>
              </div>
            </div>
          </div>

          <nav className="mt-5 grid grid-cols-2 gap-2 sm:mt-8 lg:flex lg:flex-col">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center justify-between rounded-[1rem] px-3 py-3 text-sm font-medium transition-colors ${
                  item.active
                    ? "bg-black text-white shadow-[0_16px_32px_rgba(15,23,42,0.14)]"
                    : "border border-black/8 bg-white text-black/58 hover:bg-black/[0.04] hover:text-black lg:border-0 lg:bg-transparent"
                }`}
              >
                <span className="inline-flex items-center gap-3">
                  <FontAwesomeIcon icon={item.icon} className="text-[1.2rem]" />
                  {item.label}
                </span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={`${item.active ? "text-white/70" : "text-black/24"} text-[1.1rem]`}
                />
              </Link>
            ))}
          </nav>

          <div className="mt-5 rounded-[1.35rem] border border-black/7 bg-[#0d1117] p-4 text-white shadow-[0_24px_44px_rgba(15,23,42,0.12)] sm:mt-8 sm:rounded-[1.5rem]">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-white/10 text-white">
                <FontAwesomeIcon
                  icon={faArrowTrendUp}
                  className="text-[1.35rem]"
                />
              </div>
              <div>
                <p className="text-sm font-semibold">Growth plan</p>
                <p className="mt-1 text-xs text-white/46">
                  Upgrade for advanced billing automation.
                </p>
              </div>
            </div>
            <button className="mt-4 w-full rounded-[1rem] bg-white px-4 py-3 text-sm font-semibold text-black">
              View plan details
            </button>
          </div>
        </aside>

        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-30 border-b border-black/6 bg-[#f6f7f3]/92 px-4 py-4 backdrop-blur-xl sm:px-6 sm:py-5 lg:px-8">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/35">
                  Product dashboard
                </p>
                <h1 className="mt-2 text-[2rem] font-semibold leading-none tracking-[-0.07em] text-black sm:text-[2.35rem] lg:text-[2.6rem]">
                  Good afternoon, {userName}
                </h1>
                <p className="mt-2 text-sm leading-7 text-black/48">
                  Monitor subscriptions, customer activity, and the workflows
                  that matter most as the product grows.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {!hasFirebaseClientConfig ? (
                  <span className="rounded-full border border-[#f5d7b4] bg-[#fff8ef] px-4 py-2 text-sm font-medium text-[#8a5b1e]">
                    Demo mode
                  </span>
                ) : null}
                <button className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm font-semibold text-black/66">
                  <FontAwesomeIcon icon={faBell} className="text-[1.15rem]" />
                  Alerts
                </button>
                <button className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(15,23,42,0.12)]">
                  <FontAwesomeIcon icon={faPlus} className="text-[1.15rem]" />
                  New action
                </button>
              </div>
            </div>
          </header>

          <main className="flex-1 px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
