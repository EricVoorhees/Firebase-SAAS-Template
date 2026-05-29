"use client";

import { useMemo, useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { updateProfile } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEnvelope,
  faLock,
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn, SignInMethod } from "@/lib/firebase/signin";
import signUp from "@/lib/firebase/signup";
import { siteConfig } from "@/lib/site";
import { hasFirebaseClientConfig } from "@/lib/firebase/firebaseClient";
import AuthShowcase from "./AuthShowcase";

type AuthMode = "login" | "signup";

async function createUserRecord(input: {
  uid: string;
  email: string | null;
  name?: string | null;
}) {
  const response = await fetch("/api/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error("Failed to create user profile.");
  }
}

export default function LoginForm({ mode }: { mode: AuthMode }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const isSignup = mode === "signup";

  const copy = useMemo(
    () =>
      isSignup
        ? {
            subtitle: "Let's build your company.",
            button: "Create account",
            showcaseTitle: "A full roadmap tailored to your company",
            showcaseBody:
              "Firebase Saas guides your team through onboarding, launch setup, and the core workflows that turn a starter into a real product.",
          }
        : {
            subtitle: "Let's build your company.",
            button: "Sign in",
            showcaseTitle: "A full roadmap tailored to your company",
            showcaseBody:
              "Firebase Saas guides your team through onboarding, launch setup, and the core workflows that turn a starter into a real product.",
          },
    [isSignup],
  );

  const canSubmit = useMemo(() => {
    if (!hasFirebaseClientConfig) return false;
    if (!email || !password || isPending) return false;
    if (!isSignup) return true;

    return Boolean(fullName.trim() && confirmPassword);
  }, [confirmPassword, email, fullName, isPending, isSignup, password]);

  function handleSocialAuth(method: SignInMethod.Google | SignInMethod.GitHub) {
    if (!hasFirebaseClientConfig) return;

    setError(null);
    startTransition(async () => {
      try {
        const result = await signIn(method, {
          signupCallback: async (userCredential) => {
            await createUserRecord({
              uid: userCredential.user.uid,
              email: userCredential.user.email,
              name: userCredential.user.displayName,
            });
          },
        });

        if (result.user) {
          router.push("/app/dashboard");
          return;
        }

        if (result.error) {
          setError(result.error);
          toast.error(result.error);
        }
      } catch (actionError) {
        console.error("Social auth error:", actionError);
        setError("Unable to continue with that provider right now.");
        toast.error("Unable to continue with that provider right now.");
      }
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!hasFirebaseClientConfig) {
      setError("Firebase auth is not configured for this environment.");
      return;
    }

    if (isSignup && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError(null);

    startTransition(async () => {
      try {
        if (isSignup) {
          const result = await signUp(email, password);

          if (result.user) {
            if (fullName.trim()) {
              await updateProfile(result.user.user, {
                displayName: fullName.trim(),
              });
            }

            await createUserRecord({
              uid: result.user.user.uid,
              email: result.user.user.email,
              name: fullName.trim() || result.user.user.displayName,
            });

            toast.success("Account created.");
            router.push("/app/dashboard");
            return;
          }

          if (result.error) {
            setError(result.error.message);
            toast.error(result.error.message);
          }

          return;
        }

        const result = await signIn(SignInMethod.EmailPassword, {
          credentials: { email, password },
        });

        if (result.user) {
          router.push("/app/dashboard");
          return;
        }

        if (result.error) {
          setError(result.error);
          toast.error(result.error);
        }
      } catch (actionError) {
        console.error("Auth submit error:", actionError);
        setError("Something went wrong. Please try again.");
        toast.error("Something went wrong. Please try again.");
      }
    });
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto grid min-h-screen w-full max-w-[1540px] gap-5 px-4 py-4 sm:px-5 sm:py-5 lg:grid-cols-[1.58fr_0.92fr] lg:px-6">
        <section className="hidden items-center justify-center lg:flex lg:pr-1">
          <AuthShowcase title={copy.showcaseTitle} body={copy.showcaseBody} />
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

            <p className="mt-5 text-[1.15rem] text-black/42">{copy.subtitle}</p>

            <div className="mt-7 inline-flex rounded-full border border-black/10 bg-[#f7f7f4] p-1 shadow-[0_10px_22px_rgba(15,23,42,0.04)]">
              <Link
                href="/login"
                className={`inline-flex min-w-[138px] items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[0.93rem] font-medium transition-all ${
                  !isSignup
                    ? "bg-white text-black shadow-[0_10px_20px_rgba(15,23,42,0.08)]"
                    : "text-black/40"
                }`}
              >
                <FontAwesomeIcon icon={faRightToBracket} className="text-[1.25rem]" />
                Sign In
              </Link>
              <Link
                href="/signup"
                className={`inline-flex min-w-[138px] items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[0.93rem] font-medium transition-all ${
                  isSignup
                    ? "bg-white text-black shadow-[0_10px_20px_rgba(15,23,42,0.08)]"
                    : "text-black/40"
                }`}
              >
                <FontAwesomeIcon icon={faUserPlus} className="text-[1.25rem]" />
                Sign Up
              </Link>
            </div>

            <div className="mt-8 flex w-full flex-col gap-3.5">
              <button
                type="button"
                onClick={() => handleSocialAuth(SignInMethod.Google)}
                disabled={!hasFirebaseClientConfig || isPending}
                className="inline-flex h-[58px] w-full items-center justify-center gap-3.5 rounded-full border border-black/35 bg-[#222222] px-6 text-[1.02rem] font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.14)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-55"
              >
                <FontAwesomeIcon icon={faGoogle} className="text-[1.5rem]" />
                <span>{isSignup ? "Sign up with Google" : "Sign in with Google"}</span>
              </button>

              <button
                type="button"
                onClick={() => handleSocialAuth(SignInMethod.GitHub)}
                disabled={!hasFirebaseClientConfig || isPending}
                className="inline-flex h-[58px] w-full items-center justify-center gap-3.5 rounded-full border border-black/35 bg-[#222222] px-6 text-[1.02rem] font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.14)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-55"
              >
                <FontAwesomeIcon icon={faGithub} className="text-[1.5rem]" />
                <span>{isSignup ? "Sign up with GitHub" : "Sign in with GitHub"}</span>
              </button>
            </div>

            <div className="mt-8 w-full">
              {error ? (
                <div className="rounded-[1.25rem] border border-[#ffd3d3] bg-[#fff7f7] p-4 text-left text-sm leading-7 text-[#a33d3d]">
                  {error}
                </div>
              ) : null}

              {!hasFirebaseClientConfig ? (
                <div className={`${error ? "mt-4" : ""} rounded-[1.25rem] border border-[#f5d7b4] bg-[#fff8ef] p-4 text-left text-sm leading-7 text-[#8a5b1e]`}>
                  Firebase auth is not configured in this local environment yet.
                  The page is ready, but live auth actions are disabled until
                  the Firebase client env vars are connected.
                </div>
              ) : null}
            </div>

            <div className="mt-7 flex w-full items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-black/28">
              <div className="h-px flex-1 bg-black/10" />
              <span>Or use email</span>
              <div className="h-px flex-1 bg-black/10" />
            </div>

            <form className="mt-6 flex w-full flex-col gap-3.5 text-left" onSubmit={handleSubmit}>
              {isSignup ? (
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-black/58">Full name</span>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    placeholder="Jane Cooper"
                    className="h-[56px] rounded-[1.1rem] border border-black/10 px-5 text-[0.97rem] text-black outline-none transition-colors focus:border-black/30"
                  />
                </label>
              ) : null}

              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-black/58">Email</span>
                <div className="flex h-[56px] items-center gap-4 rounded-[1.1rem] border border-black/10 px-5">
                  <FontAwesomeIcon icon={faEnvelope} className="text-[1.2rem] text-black/30" />
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="jane@company.com"
                    className="w-full border-0 bg-transparent text-[0.98rem] text-black outline-none"
                  />
                </div>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-black/58">Password</span>
                <div className="flex h-[56px] items-center gap-4 rounded-[1.1rem] border border-black/10 px-5">
                  <FontAwesomeIcon icon={faLock} className="text-[1.2rem] text-black/30" />
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder={isSignup ? "Create a secure password" : "Enter your password"}
                    className="w-full border-0 bg-transparent text-[0.98rem] text-black outline-none"
                  />
                </div>
              </label>

              {isSignup ? (
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-black/58">Confirm password</span>
                  <div className="flex h-[56px] items-center gap-4 rounded-[1.1rem] border border-black/10 px-5">
                    <FontAwesomeIcon icon={faLock} className="text-[1.2rem] text-black/30" />
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(event) => setConfirmPassword(event.target.value)}
                      placeholder="Repeat your password"
                      className="w-full border-0 bg-transparent text-[0.98rem] text-black outline-none"
                    />
                  </div>
                </label>
              ) : (
                <div className="flex justify-end">
                  <Link
                    href={email ? `/password-reset?email=${encodeURIComponent(email)}` : "/password-reset"}
                    className="text-sm font-medium text-black/46 transition-colors hover:text-black"
                  >
                    Forgot password?
                  </Link>
                </div>
              )}

              <button
                type="submit"
                disabled={!canSubmit}
                className="mt-2 inline-flex h-[58px] items-center justify-center gap-3 rounded-full bg-[#222222] px-6 text-[1.02rem] font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.14)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-55"
              >
                <span>{isPending ? "Working..." : copy.button}</span>
                {!isPending ? (
                  <FontAwesomeIcon icon={faArrowRight} className="text-[1.15rem]" />
                ) : null}
              </button>
            </form>

            <div className="mt-8 pb-4 text-sm leading-7 text-black/36">
              By continuing you agree to our{" "}
              <Link href="/" className="underline underline-offset-2">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/" className="underline underline-offset-2">
                Terms of Service
              </Link>
              .
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
