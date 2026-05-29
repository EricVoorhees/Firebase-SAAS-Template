import type { ReactNode } from "react";

type LogoItem = {
  name: string;
  mark: ReactNode;
  labelClassName?: string;
};

const markClassName = "h-5 w-5 shrink-0";
const labelClassName =
  "text-[0.98rem] font-semibold tracking-[-0.02em] text-black/70";

function NextLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={markClassName}
      fill="none"
    >
      <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M8 16.5V7.5l8 8V7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FirebaseLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={markClassName}
      fill="none"
    >
      <path d="M12.1 2.5 5 18.3l2.2-13.5a1.6 1.6 0 0 1 2.9-.4Z" fill="#FFA000" />
      <path d="m12 2.5 6.4 12.6-1.8 3.5a1.5 1.5 0 0 1-2.6 0L7.6 6.8Z" fill="#F57C00" />
      <path d="m5 18.3 1.1-.8 11-9.9-5 14.7a1.5 1.5 0 0 1-2.3.8Z" fill="#FFCA28" />
    </svg>
  );
}

function StripeLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={markClassName}
      fill="none"
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="6.5" fill="#635BFF" />
      <path
        d="M9 9.3c1.1-.7 2.2-1 3.6-1 1.5 0 2.8.4 4 1l-.8 2c-.9-.4-1.9-.7-3-.7-.8 0-1.3.2-1.3.6 0 .4.4.6 1.7 1 2 .5 3.7 1.2 3.7 3.3 0 2.4-2.1 3.5-4.8 3.5-1.4 0-3-.3-4.2-.9l.8-2.1c1 .5 2.3.9 3.5.9.9 0 1.5-.2 1.5-.7s-.6-.7-1.9-1c-2-.5-3.5-1.3-3.5-3.2 0-1.4.8-2.4 1.7-2.9Z"
        fill="white"
      />
    </svg>
  );
}

function TailwindLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={markClassName}
      fill="none"
    >
      <path
        d="M9.1 8.2c1.5-2 3.2-2.9 5.2-2.7 1.5.2 2.5 1 3.5 2.2 1.5 2 2.7 2.8 5 2.6-1.5 2-3.2 2.9-5.2 2.7-1.5-.2-2.5-1-3.5-2.2-1.5-2-2.7-2.8-5-2.6Zm-4.3 5.4c1.5-2 3.2-2.9 5.2-2.7 1.5.2 2.5 1 3.5 2.2 1.5 2 2.7 2.8 5 2.6-1.5 2-3.2 2.9-5.2 2.7-1.5-.2-2.5-1-3.5-2.2-1.5-2-2.7-2.8-5-2.6Z"
        fill="#06B6D4"
      />
    </svg>
  );
}

function ShadcnLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={markClassName}
      fill="none"
    >
      <path
        d="M4.5 16.5 11.5 9.5M12.5 16.5 19.5 9.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ResendLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={markClassName}
      fill="none"
    >
      <path
        d="M4 7h16v10H4V7Zm2.7 1.8L12 12.4l5.3-3.6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VercelLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={markClassName}
      fill="none"
    >
      <path d="M12 5 19 18H5l7-13Z" fill="currentColor" />
    </svg>
  );
}

const stackItems: LogoItem[] = [
  { name: "Next.js", mark: <NextLogo /> },
  { name: "Firebase", mark: <FirebaseLogo /> },
  {
    name: "Stripe",
    mark: <StripeLogo />,
    labelClassName: "text-[1rem] font-extrabold tracking-[-0.04em] text-[#635BFF]",
  },
  { name: "Tailwind CSS", mark: <TailwindLogo /> },
  { name: "shadcn/ui", mark: <ShadcnLogo /> },
  { name: "Resend", mark: <ResendLogo /> },
  { name: "Vercel", mark: <VercelLogo /> },
];

export default function TechLogoStrip() {
  return (
    <section className="w-full border-y border-black/6 bg-white">
      <div className="mx-auto max-w-[1260px] px-5 py-5 sm:px-6 sm:py-6 lg:px-10">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center lg:gap-4">
        {stackItems.map((item) => (
          <div
            key={item.name}
            className="flex min-w-0 items-center justify-center rounded-full border border-black/7 bg-[#fbfbfa] px-3 py-3 opacity-90 transition-opacity duration-200 hover:opacity-100 lg:h-11 lg:border-0 lg:bg-transparent lg:px-2 lg:py-0"
            aria-label={item.name}
          >
            <div className="flex min-w-0 items-center gap-2">
              <div className="text-black/78">{item.mark}</div>
              <span className={`${item.labelClassName ?? labelClassName} truncate text-[0.9rem] sm:text-[0.98rem]`}>
                {item.name}
              </span>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
