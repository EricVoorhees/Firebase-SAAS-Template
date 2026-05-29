import ExplanationSection from "@/components/sections/Explanation";
import HeroSection from "@/components/sections/HeroSection";
import TechLogoStrip from "@/components/sections/TechLogoStrip";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[var(--page-bg)] pb-16 text-[var(--page-ink)]">
      <HeroSection />
      <TechLogoStrip />
      <ExplanationSection />
    </main>
  );
}
