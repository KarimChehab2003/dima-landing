import SectionWrapper from "@/components/shared/SectionWrapper";
import RequestDemoButton from "../../../../components/shared/RequestDemoButton";
import { Button } from "@/components/ui/button";
import CaseStudyCard from "@/components/shared/CaseStudyCard";

function HeroSection() {
    return (
        <SectionWrapper className="min-h-dvh">
            <div className="container mx-auto flex flex-col justify-center items-center gap-8 ">
                {/* Heading */}
                <h1 className="text-2xl lg:text-[44px] text-center max-w-5xl">See how leading companies across MENA trust dima to stay ahead of conversations, protect their reputation, and unlock growth</h1>

                {/* Buttons */}
                <div className="inline-flex flex-wrap justify-center items-center gap-6">
                    <RequestDemoButton size={"xl"} />
                    <Button className="uppercase font-bold" variant={"outline"} size={"xl"}>
                        About us
                    </Button>
                </div>

                <CaseStudyCard />
            </div>
        </SectionWrapper>
    );
}

export default HeroSection;