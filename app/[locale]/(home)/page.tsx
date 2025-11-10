import HeroSection from "./sections/HeroSection";
import EmpoweringAgenciesSection from "./sections/EmpoweringAgenciesSection";
import OwnConversationSection from "./sections/OwnConversationSection";
import DimaAiSection from "./sections/DimaAiSection";
import DimaSuiteSection from "./sections/DimaSuiteSection";
import CaseStudiesSection from "./sections/CaseStudiesSection";
import TestimonialSection from "./sections/TestimonialSection";
import RequestDemoSection from "@/components/shared/RequestDemoSection";
import QuestionsAnsweredSection from "@/app/[locale]/(home)/sections/QuestionsAnsweredSection";


function HomePage() {
  return (
    <main className="h-full">
      <HeroSection />
      <EmpoweringAgenciesSection />
      <OwnConversationSection />
      <DimaAiSection />
      <DimaSuiteSection />
      <CaseStudiesSection />
      <TestimonialSection />
      <RequestDemoSection />
      <QuestionsAnsweredSection />
    </main>
  );
}

export default HomePage;