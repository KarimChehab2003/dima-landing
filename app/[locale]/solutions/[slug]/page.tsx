import ActionableInsightsSection from "../sections/ActionableInsightsSection";
import HeroSection from "../sections/HeroSection";
import StayAheadSection from "../sections/StayAheadSection";

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
        </main>
    );
}

export default SolutionPage;