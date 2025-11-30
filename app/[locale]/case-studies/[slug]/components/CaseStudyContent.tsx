"use client";
import StackedCardsSection from "../sections/StackedCardsSection";
import CaseContent from "../sections/CaseContent";
import MoreCaseStudies from "../sections/MoreCaseStudies";
import { useCaseStudy } from "../../hooks/useCaseStudy";
import Loading from "@/app/[locale]/loading";
import { notFound } from "next/navigation";
import RequestDemoSection from "@/components/shared/form/RequestDemoSection";


function CaseStudyContent({ slug }: { slug: string }) {
    const { data: caseStudy, isLoading, isError } = useCaseStudy(slug);
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