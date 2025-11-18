"use client";
import StackedCardsSection from "../sections/StackedCardsSection";
import CaseContent from "../sections/CaseContent";
import MoreCaseStudies from "../sections/MoreCaseStudies";
import RequestDemoSection from "@/components/shared/RequestDemoSection";
import { useCaseStudy } from "../../hooks/useCaseStudy";
import Loading from "@/app/[locale]/loading";
import { notFound } from "next/navigation";
import { copyAndRenameDoc } from "../../hooks/moveCaseStudy";
import { slugify } from "@/lib/utils";

function CaseStudyContent({ slug }: { slug: string }) {
    const { data: caseStudy, isLoading, isError } = useCaseStudy(slug);
    console.log(caseStudy)
    if (isLoading) return Loading();
    if (isError) return notFound();

    // async function handleFix() {
    //     await copyAndRenameDoc(
    //         "case-studies",
    //         "how-a-leading-fandb-brand-protected-millions-in-revenue-with-real-time-arabic-first-crisis-detection",
    //         slugify("How-a-Leading-F&B-Brand-Protected-Millions-in-Revenue-with-Real-Time-Arabic-First-Crisis-Detection")
    //     );
    //     alert("Document copied and renamed!");
    // }

    return (
        <article>
            <StackedCardsSection caseStudy={caseStudy!} />
            <CaseContent caseStudy={caseStudy!} />
            <MoreCaseStudies />
            <RequestDemoSection />
            {/* <button onClick={handleFix}>move item</button> */}
        </article>
    );
}

export default CaseStudyContent;