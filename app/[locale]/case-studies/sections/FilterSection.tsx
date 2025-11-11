import SectionWrapper from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import CaseStudyCard from "../components/CaseStudyCard";
import PaginationWrapper from "../components/PaginationWrapper";

function FilterSection() {
    return (
        <SectionWrapper>
            <div className="container mx-auto flex flex-col justify-center items-center gap-8 ">
                {/* Scrollable Button Row */}
                <div className="w-full overflow-x-auto lg:flex lg:justify-center py-4">
                    <ul className="flex items-center gap-4 w-max px-4">
                        {["all", "customer success stories", "use cases"].map((text, i) => (
                            <li key={i} className="shrink-0">
                                <Button size={"xl"}>
                                    {text}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Blogs */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <li key={i}>
                            <CaseStudyCard />
                        </li>
                    ))}
                </ul>
                <PaginationWrapper />
            </div>
        </SectionWrapper>
    );
}

export default FilterSection;
