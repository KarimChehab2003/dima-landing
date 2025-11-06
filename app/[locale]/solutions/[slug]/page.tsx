import RequestDemoSection from "@/components/shared/RequestDemoSection";
import ExpandingCardsSection from "../sections/ExpandingCardsSection";
import CardsGrid from "../sections/CardsGrid";
import HeroSection from "../sections/HeroSection";
import ScrollingSection from "../sections/ScrollingSection";
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
            <ExpandingCardsSection />
            <ScrollingSection />
            <CardsGrid />
            <TestimonialSection />
            <RequestDemoSection />
            <QuestionsAnsweredSection />
        </main>
    );
}

export default SolutionPage;