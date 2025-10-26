import { CircleSmall } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import Image from "next/image";

function DimaAiSection() {
    return (
        <SectionWrapper>
            <div className="container mx-auto p-8 text-white rounded-4xl"
                style={{
                    backgroundImage: "url('/footer-background.svg')",
                    backgroundPosition: "right center"
                }}
            >
                <p className="text-sm">DIMA AI</p>
                <div className="flex justify-between items-center gap-8">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-4xl sm:text-5xl bg-linear-to-r from-[#95DDEE] to-primary bg-clip-text text-transparent">Your brand powered by Arabic-first AI</h2>
                        <p className="text-xl">
                            Meet dima AI — your copilot for turning data into clarit . With Arabic-first intelligence, it understands all dialects, slang, and Franco-Arabic, transforming raw data into instant insights and clear reports, giving you the full picture global tools miss.
                        </p>
                    </div>
                    <figure className="relative flex-1 h-[400px]">
                        <Image
                            src="/dima-ai.png"
                            alt="stats"
                            fill
                            className="object-contain"
                        />
                    </figure>
                </div>
                <p className="inline-flex gap-2 ms-4">
                    <CircleSmall /> <span>EXPLORE</span>
                </p>
            </div>
        </SectionWrapper>
    );
}

export default DimaAiSection;