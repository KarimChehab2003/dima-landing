import { LucideMonitor } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function DimaAiSection() {
    return (
        <SectionWrapper>
            <div
                className="container mx-auto p-6 sm:p-12 lg:px-20 text-white rounded-4xl bg-[#043558]">
                <p className="text-sm font-bold mb-4">DIMA AI</p>

                <div className="flex flex-col-reverse lg:flex-row justify-between items-center ">
                    {/* Text Section */}
                    <div className="flex-1 space-y-6 text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#95DDEE] leading-tight">
                            Your brand powered by Arabic-first AI
                        </h2>

                        <p className="text-base sm:text-lg lg:text-xl font-medium max-w-2xl mx-auto lg:mx-0">
                            Meet dima AI — your copilot for turning data into clarity. With Arabic-first intelligence,
                            it understands all dialects, slang, and Franco-Arabic, transforming raw data into instant
                            insights and clear reports, giving you the full picture global tools miss.
                        </p>
                    </div>

                    {/* Image Section */}
                    <figure className="relative w-full lg:flex-1 h-[220px] sm:h-[300px] lg:h-[500px]">
                        <Image
                            src="/dima-phone.png"
                            alt="stats"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                            priority
                        />
                    </figure>
                </div>

                <Button size="2xl" className="bg-[#115687]! hover:bg-[#115687]/80! transition-colors duration-200 w-full sm:w-fit mt-4">
                    <LucideMonitor />
                    <span>Request a demo</span>
                </Button>
            </div>
        </SectionWrapper>
    );
}

export default DimaAiSection;
