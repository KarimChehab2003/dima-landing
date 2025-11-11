import StackedCardsSection from "./sections/StackedCardsSection";
import CaseContent from "./sections/CaseContent";
import RequestDemoSection from "@/components/shared/RequestDemoSection";
import MoreCaseStudies from "./sections/MoreCaseStudies";

type SingleViewCaseStudiesPageProps = {
    params: Promise<{ slug: string }>
}

async function SingleViewCaseStudiesPage({ params }: SingleViewCaseStudiesPageProps) {
    const name = (await params).slug
    return (
        <main>
            <StackedCardsSection />
            <CaseContent />
            <MoreCaseStudies />
            <RequestDemoSection />
        </main>
    );
}

export default SingleViewCaseStudiesPage;