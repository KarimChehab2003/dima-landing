import Image from "next/image";
import SectionWrapper from "../../(home)/components/SectionWrapper";
import LogoCarousel from "../../(home)/components/LogoCarousel";
import CounterPercentage from "../components/CounterPercentage";

function HeroSection() {
    return (
        <SectionWrapper className="min-h-dvh">
            <div className="container mx-auto flex flex-col justify-center items-center gap-8 my-12">
                {/* Heading */}
                <h2 className="bg-black text-white uppercase w-fit p-1 rounded-sm italic tracking-wide">Social Listening & Analytics</h2>
                <h1 className="text-2xl lg:text-[44px] font-normal text-center">Arabic-First Copilot for Social Listening & Analytics</h1>

                {/* Images */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-4">
                    <figure className="p-1 rounded-lg bg-muted">
                        <Image
                            src={"/social-listening/hero-image-1.png"}
                            alt="Hero Image 1"
                            width={322}
                            height={322}
                        />
                    </figure>
                    <figure className="p-1 rounded-lg bg-muted">
                        <Image
                            src={"/social-listening/hero-image-2.png"}
                            alt="Hero Image 2"
                            width={322}
                            height={322}
                        />
                    </figure>
                </div>
                {/* Logo Carousel */}
                <LogoCarousel />

                {/* Percentages */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-8 w-full max-w-5xl">
                    <CounterPercentage number={100} text="Full Coverage" />
                    <CounterPercentage number={97} text="Arabic Accuracy" />
                    <CounterPercentage number={44} text="Faster Time-to-Insight" />
                </div>
            </div>
        </SectionWrapper>
    );
}

export default HeroSection;