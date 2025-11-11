import SectionWrapper from "@/components/shared/SectionWrapper";
import CaseStudyCard from "../../components/CaseStudyCard";

function MoreCaseStudies() {
    return (
        <SectionWrapper>
            <div className="container mx-auto flex flex-col justify-center items-center">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
                    <li>
                        <h4 className="uppercase font-mono text-[13px]">more cases</h4>
                        <div className="h-0.5 bg-muted w-[40%]"></div>
                    </li>
                    {Array.from({ length: 2 }).map((_, i) => (
                        <li key={i}>
                            <CaseStudyCard />
                        </li>
                    ))}
                </ul>
            </div>
        </SectionWrapper>
    );
}

export default MoreCaseStudies;