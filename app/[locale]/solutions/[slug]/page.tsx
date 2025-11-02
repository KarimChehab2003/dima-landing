import ActionableInsightsSection from "../sections/ActionableInsightsSection";
import BuiltEntreprisesSection from "../sections/BuiltEntreprisesSection";
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
            <BuiltEntreprisesSection />
        </main>
    );
}

export default SolutionPage;