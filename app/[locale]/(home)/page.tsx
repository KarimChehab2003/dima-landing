import { useTranslations } from "next-intl";
import HeroSection from "./sections/HeroSection";
import EmpoweringAgenciesSection from "./sections/EmpoweringAgenciesSection";


function HomePage() {
  const t = useTranslations("Home");
  return (
    <main className="h-full">
      <HeroSection />
      <EmpoweringAgenciesSection />
    </main>
  );
}

export default HomePage;