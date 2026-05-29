import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/lib/context/ClientProviders";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { getSiteUrl, siteConfig } from "@/lib/site";
import RouteFrame from "@/components/layout/RouteFrame";
config.autoAddCss = false;

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: getSiteUrl(),
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ClientProviders>
          <RouteFrame>{children}</RouteFrame>
        </ClientProviders>
      </body>
    </html>
  );
}
