import { SubscriptionModalProvider } from "@/lib/context/SubscriptionModalContext";
import type { Metadata } from "next";
import DashboardShell from "@/components/dashboard/DashboardShell";

export const metadata: Metadata = {
  title: "Dashboard | Firebase Saas",
  description: "Production-ready dashboard workspace for Firebase Saas.",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SubscriptionModalProvider>
      <DashboardShell>{children}</DashboardShell>
    </SubscriptionModalProvider>
  );
}
