"use client";

import { useAuth } from "@/lib/context/AuthContext";
import signout from "@/lib/firebase/signout";
import Link from "next/link";
import SubscriptionModalReminder from "../subscription/SubscriptionModalReminder";
import { useRouter } from "next/navigation";

export default function UserAvatar() {
  const { currentUser, isLoadingAuth } = useAuth();
  const router = useRouter();

  if (isLoadingAuth || !currentUser) {
    return (
      <div className="flex items-center gap-3">
        <Link
          href="/app/dashboard"
          className="hidden items-center justify-center rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors duration-200 hover:border-black/20 hover:bg-black/[0.02] sm:inline-flex"
        >
          View demo
        </Link>
        <Link
          href="/signup"
          className="inline-flex items-center justify-center rounded-full bg-black px-3.5 py-2.5 text-[0.92rem] font-semibold text-white shadow-[0_14px_32px_rgba(15,23,42,0.12)] transition-transform duration-200 hover:-translate-y-0.5 sm:px-5 sm:text-sm"
        >
          Start building
        </Link>
      </div>
    );
  }

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar placeholder border border-black/8 bg-white"
      >
        <div className="bg-neutral text-neutral-content w-10 rounded-full">
          {currentUser.displayName && <span>{currentUser.displayName[0]}</span>}
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content z-[100] mt-3 w-52 rounded-[1.2rem] border border-black/8 bg-base-100 p-2 shadow-xl"
      >
        <li className="mb-4">
          <SubscriptionModalReminder />
        </li>
        <li>
          <Link href="/app/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/app/settings">Settings</Link>
        </li>

        <li>
          <button
            onClick={() =>
              signout(async () => {
                router.push("/login");
              })
            }
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
