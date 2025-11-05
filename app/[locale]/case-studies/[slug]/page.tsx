import SectionWrapper from "@/components/shared/SectionWrapper";
import LayeredCard from "./components/LayeredCard";
import StackedCardsSection from "./sections/StackedCardsSection";
import CaseContent from "./sections/CaseContent";
import VideosSection from "../../blogs/sections/VideosSection";
import FilterSection from "../sections/FilterSection";
import RequestDemoSection from "@/components/shared/RequestDemoSection";
import PaginationWrapper from "../components/PaginationWrapper";

type SingleViewCaseStudiesPageProps = {
    params: Promise<{ slug: string }>
}

async function SingleViewCaseStudiesPage({ params }: SingleViewCaseStudiesPageProps) {
    const name = (await params).slug
    return (
        <main>
            <SectionWrapper className="min-h-dvh">
                <StackedCardsSection />
                <CaseContent />
                <VideosSection title="suitable title here" videos={[{ src: "/learn-2.svg" }]} />
                <FilterSection />
                <PaginationWrapper />
            </SectionWrapper>
            <RequestDemoSection />
        </main>
    );
}

export default SingleViewCaseStudiesPage;