import { useTranslations } from "next-intl";
import HeroSection from "./sections/HeroSection";
import EmpoweringAgenciesSection from "./sections/EmpoweringAgenciesSection";
import OwnConversationSection from "./sections/OwnConversationSection";
import DimaAiSection from "./sections/DimaAiSection";
import DimaSuiteSection from "./sections/DimaSuiteSection";
import CaseStudiesSection from "./sections/CaseStudiesSection";
import QuestionsAnsweredSection from "./sections/QuestionsAnsweredSection";


function HomePage() {
  const t = useTranslations("Home");
  return (
    <main className="h-full">
      <HeroSection />
      <EmpoweringAgenciesSection />
      <OwnConversationSection />
      <DimaAiSection />
      <DimaSuiteSection />
      <CaseStudiesSection />
      <QuestionsAnsweredSection />
    </main>
  );
}

export default HomePage;