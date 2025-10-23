import { useTranslations } from "next-intl";
import HeroSection from "./sections/HeroSection";

function HomePage() {
  const t = useTranslations("Home");
  return (
    <main className="min-h-dvh h-full flex flex-col">
      <div className="flex-1">
        <HeroSection />
      </div>
    </main>
  );
}

export default HomePage;