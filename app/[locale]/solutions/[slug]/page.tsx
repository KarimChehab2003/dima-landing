import RequestDemoSection from "@/components/shared/RequestDemoSection";
import ExpandingCardsSection from "../sections/ExpandingCardsSection";
import CardsGrid from "../sections/CardsGrid";
import HeroSection from "../sections/HeroSection";
import ScrollingSection from "../sections/ScrollingSection";
import TestimonialSection from "../sections/TestimonialSection";
import QuestionsAnsweredSection from "@/app/[locale]/(home)/sections/QuestionsAnsweredSection";

type SolutionPageProps = {
    params: Promise<{ slug: string }>
}

async function SolutionPage({ params }: SolutionPageProps) {
    const slug = (await params).slug;
    return (
        <main>
            <HeroSection slug={slug} />
            <ExpandingCardsSection slug={slug} />
            <ScrollingSection slug={slug} />
            <CardsGrid slug={slug} />
            <TestimonialSection slug={slug} />
            <RequestDemoSection />
            <QuestionsAnsweredSection slug={slug} />
        </main>
    );
}

export default SolutionPage;