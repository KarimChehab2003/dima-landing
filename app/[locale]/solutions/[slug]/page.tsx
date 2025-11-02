import RequestDemoSection from "@/components/shared/RequestDemoSection";
import ActionableInsightsSection from "../sections/ActionableInsightsSection";
import BuiltEntreprisesSection from "../sections/BuiltEntreprisesSection";
import HeroSection from "../sections/HeroSection";
import StayAheadSection from "../sections/StayAheadSection";
import TestimonialSection from "../sections/TestimonialSection";
import QuestionsAnsweredSection from "@/components/shared/QuestionsAnsweredSection";

type SolutionPageProps = {
    params: Promise<{ slug: string }>
}

async function SolutionPage({ params }: SolutionPageProps) {
    const name = (await params).slug;
    return (
        <main>
            <HeroSection />
            <ActionableInsightsSection />
            <StayAheadSection />
            <BuiltEntreprisesSection />
            <TestimonialSection />
            <RequestDemoSection />
            <QuestionsAnsweredSection />
        </main>
    );
}

export default SolutionPage;