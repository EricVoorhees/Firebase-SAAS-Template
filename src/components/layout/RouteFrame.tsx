"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/nav/Footer";

export default function RouteFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isWorkspaceRoute = pathname.startsWith("/app");
  const isAuthRoute =
    pathname.startsWith("/login") ||
    pathname.startsWith("/signup") ||
    pathname.startsWith("/password-reset");

  if (isWorkspaceRoute || isAuthRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
