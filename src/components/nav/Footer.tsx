import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-start">
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-flex items-center gap-4 text-lg font-semibold tracking-[-0.04em] text-black"
            >
              <Image
                src={siteConfig.logoPath}
                alt={`${siteConfig.name} logo`}
                width={88}
                height={88}
                className="rounded-[1.6rem]"
              />
              <span className="text-[2rem]">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-7 text-black/58">
              Firebase-first auth, billing, admin workflows, and analytics
              patterns for teams shipping real SaaS products.
            </p>
          </div>

          <nav className="flex flex-col gap-3 text-sm text-black/58">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/38">
              Product
            </p>
            <Link
              href="/#overview"
              className="transition-colors hover:text-black"
            >
              Products
            </Link>
            <Link href="/#stack" className="transition-colors hover:text-black">
              Stack
            </Link>
            <Link
              href="/#pricing"
              className="transition-colors hover:text-black"
            >
              Pricing
            </Link>
          </nav>

          <nav className="flex flex-col gap-3 text-sm text-black/58">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/38">
              Resources
            </p>
            <Link href="/blog" className="transition-colors hover:text-black">
              Blog
            </Link>
            <Link href="/login" className="transition-colors hover:text-black">
              Log in
            </Link>
            <Link
              href="/app/dashboard"
              className="transition-colors hover:text-black"
            >
              Dashboard
            </Link>
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-black/5 pt-6 text-sm text-black/42 sm:flex-row sm:items-center sm:justify-between">
          <p>{siteConfig.name} is built with Next.js, Firebase, and Stripe.</p>
          <p>Designed for a faster path from prototype to production.</p>
        </div>
      </div>
    </footer>
  );
}
