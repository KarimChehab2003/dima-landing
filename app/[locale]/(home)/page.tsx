import HeroSection from "./sections/HeroSection";
import EmpoweringAgenciesSection from "./sections/EmpoweringAgenciesSection";
import OwnConversationSection from "./sections/OwnConversationSection";
import DimaAiSection from "./sections/DimaAiSection";
import DimaSuiteSection from "./sections/DimaSuiteSection";
import CaseStudiesSection from "./sections/CaseStudiesSection";
import QuestionsAnsweredSection from "./sections/QuestionsAnsweredSection";
import TestimonialSection from "./sections/TestimonialSection";
import RequestDemoSection from "./sections/RequestDemoSection";


function HomePage() {
  return (
    <main className="h-full font-light text-2xl">
      <HeroSection />
      <EmpoweringAgenciesSection />
      <OwnConversationSection />
      <DimaAiSection />
      <DimaSuiteSection />
      <CaseStudiesSection />
      <TestimonialSection />
      {/* TODO: add section request a demo */}
      <RequestDemoSection />
      <QuestionsAnsweredSection />
    </main>
  );
}

export default HomePage;