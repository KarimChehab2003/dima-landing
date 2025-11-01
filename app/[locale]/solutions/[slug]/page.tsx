import ActionableInsightsSection from "../sections/ActionableInsightsSection";
import HeroSection from "../sections/HeroSection";

type SolutionPageProps = {
    params: Promise<{ slug: string }>
}

async function SolutionPage({ params }: SolutionPageProps) {
    const name = (await params).slug;
    return (
        <main>
            <HeroSection />
            <ActionableInsightsSection />
        </main>
    );
}

export default SolutionPage;