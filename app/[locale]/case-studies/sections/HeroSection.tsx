import SectionWrapper from "@/components/shared/SectionWrapper";
import LogoCarousel from "../../(home)/components/LogoCarousel";

function HeroSection() {
    return (
        <SectionWrapper className="mt-24">
            <div className="container mx-auto flex flex-col justify-center items-center gap-8 ">
                {/* Heading */}
                <h1 className="text-2xl lg:text-[66px] text-center font-bold text-[#282943]">Case studies</h1>
                <h2 className="text-lg lg:text-2xl text-center max-w-3xl">Discover how dima&apos;s arabic-first AI copilot helps your team unlock deeper insights, respond faster, protect reputation, and scale impact</h2>
            </div>
        </SectionWrapper>
    );
}

export default HeroSection;