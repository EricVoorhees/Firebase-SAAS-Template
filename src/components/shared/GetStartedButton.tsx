"use client";

import mixpanel from "mixpanel-browser";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function GetStartedButton({
  label = "Start building",
  className = "",
  variant = "primary",
}: {
  label?: string;
  className?: string;
  variant?: "primary" | "secondary";
}) {
  const router = useRouter();

  const handleButtonClick = () => {
    if (process.env.NEXT_PUBLIC_MIXPANEL_TOKEN) {
      try {
        mixpanel.track("Get Started Button Clicked");
      } catch (error) {
        console.warn("Mixpanel tracking skipped:", error);
      }
    }

    router.push("/signup");
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${
        variant === "primary"
          ? "bg-black text-white shadow-[0_14px_32px_rgba(15,23,42,0.14)] hover:-translate-y-0.5"
          : "border border-black/10 bg-white text-black hover:border-black/18 hover:bg-black/[0.02]"
      } ${className}`}
    >
      <span>{label}</span>
      {variant === "primary" ? (
        <FontAwesomeIcon icon={faArrowRight} className="text-[1.05rem]" />
      ) : null}
    </button>
  );
}
