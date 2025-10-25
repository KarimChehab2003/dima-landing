import { useTranslations } from "next-intl";
import HeroSection from "./sections/HeroSection";
import EmpoweringAgenciesSection from "./sections/EmpoweringAgenciesSection";
import OwnConversationSection from "./sections/OwnConversationSection";


function HomePage() {
  const t = useTranslations("Home");
  return (
    <main className="h-full">
      <HeroSection />
      <EmpoweringAgenciesSection />
      <OwnConversationSection />
    </main>
  );
}

export default HomePage;