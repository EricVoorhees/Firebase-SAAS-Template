"use client";

import { useMemo, useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  confirmPasswordReset,
  sendPasswordResetEmail,
  verifyPasswordResetCode,
} from "firebase/auth";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { auth, hasFirebaseClientConfig } from "@/lib/firebase/firebaseClient";
import { siteConfig } from "@/lib/site";
import AuthShowcase from "./AuthShowcase";

export default function PasswordResetForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [email, setEmail] = useState(searchParams.get("email") ?? "");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const oobCode = searchParams.get("oobCode");
  const isResetConfirmation = Boolean(oobCode);

  const copy = useMemo(
    () =>
      isResetConfirmation
        ? {
            title: "Choose a new password",
            description:
              "Finish resetting your password and get back into your workspace.",
            button: "Update password",
          }
        : {
            title: "Reset your password",
            description:
              "Enter the email tied to your account and we will send a reset link.",
            button: "Send reset link",
          },
    [isResetConfirmation],
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!hasFirebaseClientConfig || !auth) {
      setError("Firebase auth is not configured for this environment.");
      return;
    }

    const firebaseAuth = auth;

    if (isResetConfirmation && newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    startTransition(async () => {
      try {
        if (isResetConfirmation) {
          if (!oobCode) {
            setError("This password reset link is invalid.");
            return;
          }

          await verifyPasswordResetCode(firebaseAuth, oobCode);
          await confirmPasswordReset(firebaseAuth, oobCode, newPassword);
          toast.success("Password updated.");
          router.push("/login");
          return;
        }

        await sendPasswordResetEmail(firebaseAuth, email);
        toast.success("Password reset email sent.");
      } catch (actionError) {
        console.error("Password reset error:", actionError);
        setError(
          isResetConfirmation
            ? "We could not update your password. Please request a new reset link."
            : "We could not send the reset email. Please try again.",
        );
      }
    });
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto grid min-h-screen w-full max-w-[1540px] gap-5 px-4 py-4 sm:px-5 sm:py-5 lg:grid-cols-[1.58fr_0.92fr] lg:px-6">
        <section className="hidden items-center justify-center lg:flex lg:pr-1">
          <AuthShowcase
            title="Password recovery without the template feel"
            body="Keep account recovery clean, branded, and simple for teams jumping back into billing, content, and customer operations."
          />
        </section>

        <section className="flex items-center justify-center px-0 lg:px-4 xl:px-6">
          <div className="flex w-full max-w-[392px] flex-col items-center text-center">
            <Link
              href="/"
              className="inline-flex flex-col items-center gap-4 text-black"
            >
              <Image
                src={siteConfig.logoPath}
                alt={`${siteConfig.name} logo`}
                width={82}
                height={82}
                className="rounded-[1.45rem]"
              />
              <span className="text-[2.7rem] font-medium tracking-[-0.06em] [font-family:Georgia,ui-serif,serif]">
                {siteConfig.name}
              </span>
            </Link>

            <p className="mt-5 text-[1.15rem] text-black/42">
              {isResetConfirmation
                ? "Create a new password and get back in."
                : "Reset access without slowing the team down."}
            </p>

            <Link
              href="/login"
              className="mt-7 inline-flex items-center gap-3 rounded-full border border-black/10 bg-[#f7f7f4] px-6 py-3 text-[0.95rem] font-medium text-black/72 shadow-[0_10px_22px_rgba(15,23,42,0.04)] transition-colors hover:text-black"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="text-[1.15rem]" />
              Back to sign in
            </Link>

            <div className="mt-7 w-full rounded-[1.8rem] border border-black/8 bg-white p-6 text-left shadow-[0_30px_70px_rgba(15,23,42,0.08)] sm:p-7">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-[#fff5ea] text-[#f08a24]">
                  <FontAwesomeIcon
                    icon={isResetConfirmation ? faLock : faEnvelope}
                    className="text-[1.45rem]"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/34">
                    Password reset
                  </p>
                  <h2 className="mt-2 text-[1.95rem] font-semibold leading-[1] tracking-[-0.06em] text-black">
                    {copy.title}
                  </h2>
                </div>
              </div>

              <p className="mt-5 text-[0.98rem] leading-7 text-black/48">
                {copy.description}
              </p>

              {!hasFirebaseClientConfig ? (
                <div className="mt-6 rounded-[1.4rem] border border-[#f5d7b4] bg-[#fff8ef] p-4 text-sm leading-7 text-[#8a5b1e]">
                  Firebase auth is not configured in this local environment yet,
                  so reset actions are disabled for now.
                </div>
              ) : null}

              {error ? (
                <div className="mt-6 rounded-[1.4rem] border border-[#ffd3d3] bg-[#fff7f7] p-4 text-sm leading-7 text-[#a33d3d]">
                  {error}
                </div>
              ) : null}

              <form
                className="mt-6 flex flex-col gap-4"
                onSubmit={handleSubmit}
              >
                {isResetConfirmation ? (
                  <>
                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-medium text-black/58">
                        New password
                      </span>
                      <div className="flex h-[56px] items-center gap-4 rounded-[1.1rem] border border-black/10 px-5">
                        <FontAwesomeIcon
                          icon={faLock}
                          className="text-[1.2rem] text-black/30"
                        />
                        <input
                          type="password"
                          value={newPassword}
                          onChange={(event) =>
                            setNewPassword(event.target.value)
                          }
                          placeholder="Create a new password"
                          className="w-full border-0 bg-transparent text-[0.98rem] text-black outline-none"
                        />
                      </div>
                    </label>

                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-medium text-black/58">
                        Confirm password
                      </span>
                      <div className="flex h-[56px] items-center gap-4 rounded-[1.1rem] border border-black/10 px-5">
                        <FontAwesomeIcon
                          icon={faLock}
                          className="text-[1.2rem] text-black/30"
                        />
                        <input
                          type="password"
                          value={confirmPassword}
                          onChange={(event) =>
                            setConfirmPassword(event.target.value)
                          }
                          placeholder="Repeat the new password"
                          className="w-full border-0 bg-transparent text-[0.98rem] text-black outline-none"
                        />
                      </div>
                    </label>
                  </>
                ) : (
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-black/58">
                      Email
                    </span>
                    <div className="flex h-[56px] items-center gap-4 rounded-[1.1rem] border border-black/10 px-5">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-[1.2rem] text-black/32"
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="jane@company.com"
                        className="w-full border-0 bg-transparent text-[0.98rem] text-black outline-none"
                      />
                    </div>
                  </label>
                )}

                <button
                  type="submit"
                  disabled={
                    isPending ||
                    !hasFirebaseClientConfig ||
                    (isResetConfirmation
                      ? !newPassword || !confirmPassword
                      : !email)
                  }
                  className="mt-2 inline-flex h-[58px] items-center justify-center gap-3 rounded-full bg-[#222222] px-6 text-[1.02rem] font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.14)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-55"
                >
                  <span>{isPending ? "Working..." : copy.button}</span>
                  {!isPending ? (
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-[1.15rem]"
                    />
                  ) : null}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
