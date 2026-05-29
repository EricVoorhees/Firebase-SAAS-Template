export const siteConfig = {
  name: "Firebase Saas",
  description:
    "Firebase Saas helps you build your SaaS faster with Next.js, Firebase, and Stripe.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  logoPath: "/firebase-saas-logo.png",
};

export function getSiteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}
