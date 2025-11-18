"use client";
import StackedCardsSection from "../sections/StackedCardsSection";
import CaseContent from "../sections/CaseContent";
import MoreCaseStudies from "../sections/MoreCaseStudies";
import RequestDemoSection from "@/components/shared/RequestDemoSection";
import { useCaseStudy } from "../../hooks/useCaseStudy";
import Loading from "@/app/[locale]/loading";
import { notFound } from "next/navigation";


function CaseStudyContent({ slug }: { slug: string }) {
    const { data: caseStudy, isLoading, isError } = useCaseStudy(slug);
    console.log(caseStudy)
    if (isLoading) return Loading();
    if (isError) return notFound();



    return (
        <article>
            <StackedCardsSection caseStudy={caseStudy!} />
            <CaseContent caseStudy={caseStudy!} />
            <MoreCaseStudies />
            <RequestDemoSection />
        </article>
    );
}

export default CaseStudyContent;