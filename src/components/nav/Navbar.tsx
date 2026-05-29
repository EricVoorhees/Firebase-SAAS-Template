import Image from "next/image";
import Link from "next/link";
import UserAvatar from "./UserAvatar";
import { siteConfig } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-[100] border-b border-black/5 bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1260px] items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:gap-6 lg:px-10 lg:py-4">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 text-[1.7rem] font-semibold tracking-[-0.05em] text-black sm:gap-4 sm:text-[1.9rem]"
        >
          <Image
            src={siteConfig.logoPath}
            alt={`${siteConfig.name} logo`}
            width={36}
            height={36}
            className="rounded-lg sm:h-14 sm:w-14 sm:rounded-2xl lg:h-16 lg:w-16"
          />
          <span className="truncate text-[1.55rem] leading-none sm:text-[2rem]">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-12 text-sm font-medium text-black/64 lg:flex">
          <Link href="/#overview" className="transition-colors hover:text-black">
            Products
          </Link>
          <Link href="/#stack" className="transition-colors hover:text-black">
            Stack
          </Link>
          <Link href="/#pricing" className="transition-colors hover:text-black">
            Pricing
          </Link>
          <Link href="/blog" className="transition-colors hover:text-black">
            Blog
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <UserAvatar />
        </div>
      </div>
    </header>
  );
}
