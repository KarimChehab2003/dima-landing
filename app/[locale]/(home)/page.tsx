import { useTranslations } from "next-intl";
import HeroSection from "./sections/HeroSection";


function HomePage() {
  const t = useTranslations("Home");
  return (
    <main className="h-full">
      <HeroSection />
    </main>
  );
}

export default HomePage;