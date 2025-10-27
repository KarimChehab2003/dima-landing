import { Button } from "@/components/ui/button";
import SectionWrapper from "../components/SectionWrapper";
import { dimaSolutions } from "@/data/constants/links";
import SolutionCard from "../components/SolutionCard";
import { FaDisplay } from "react-icons/fa6";

function DimaSuiteSection() {
    return (
        <SectionWrapper>
            <div className="container mx-auto flex flex-col justify-center items-center gap-12">
                <h2 className="text-4xl sm:text-5xl text-center">Discover dima&apos;s suite of AI-powered solutions</h2>
                <Button size="2xl" className="flex items-center gap-2">
                    <FaDisplay className="size-5" />
                    <span>Request a demo</span>
                </Button>

                <ul className="flex flex-wrap justify-center gap-12">
                    {
                        dimaSolutions.map((solution) => (
                            <li key={solution.href} className="w-[275px]">
                                <SolutionCard {...solution} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </SectionWrapper>
    );
}

export default DimaSuiteSection;