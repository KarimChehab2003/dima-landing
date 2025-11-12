import RequestDemoSection from "@/components/shared/RequestDemoSection";
import ExpandingCardsSection from "../sections/ExpandingCardsSection";
import CardsGrid from "../sections/CardsGrid";
import HeroSection from "../sections/HeroSection";
import ScrollingSection from "../sections/ScrollingSection";
import TestimonialSection from "../sections/TestimonialSection";
import QuestionsAnsweredSection from "@/app/[locale]/(home)/sections/QuestionsAnsweredSection";
import { notFound } from "next/navigation";


type SolutionPageProps = {
    params: Promise<{ slug: string }>
}

const checkSlugExists = async (slug: string) => {
    const validSlugs = ["social-listening-analytics", "pr-comms", "market-insights", "consumer-insights", "own-page-intelligence"];
    return validSlugs.includes(slug);
}

async function SolutionPage({ params }: SolutionPageProps) {
    const slug = (await params).slug;
    const exists = await checkSlugExists(slug);
    if (!exists) return notFound();

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