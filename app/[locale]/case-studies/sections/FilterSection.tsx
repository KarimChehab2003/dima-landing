import CaseStudyCard from "@/components/shared/CaseStudyCard";
import { Button } from "@/components/ui/button";

function FilterSection() {
    return (
        <div className="container mx-auto flex flex-col justify-center items-center gap-8 my-12">
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
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {Array.from({ length: 2 }).map((_, i) => (
                    <li key={i}>
                        <CaseStudyCard />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterSection;
