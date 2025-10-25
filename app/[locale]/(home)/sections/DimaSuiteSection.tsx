import { Button } from "@/components/ui/button";
import SectionWrapper from "../components/SectionWrapper";
import { CircleSmall } from "lucide-react";
import { dimaSolutions } from "@/data/constants/links";
import SolutionCard from "../components/SolutionCard";

function DimaSuiteSection() {
    return (
        <SectionWrapper>
            <div className="container mx-auto flex flex-col justify-center items-center gap-12">
                <h2 className="text-4xl sm:text-5xl text-center">Discover dima&apos;s suite of AI-powered solutions</h2>
                <Button variant="default" size="lg">
                    <CircleSmall /> <span className="text-sm tracking-wider">DIMA AI</span>
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