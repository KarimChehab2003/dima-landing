import SectionWrapper from "@/components/shared/SectionWrapper";
import Image from "next/image";
import { DialectAnalyzer } from "./components/DialectAnalyzer";

function ArabicDialectTool() {
    return (
        <main>
            <SectionWrapper className="min-h-dvh mt-24">
                <div className="container mx-auto py-8 sm:py-12">
                    {/* Logo Section */}
                    <div className="flex justify-center mb-12">
                        <Image
                            src="/dima-logo.svg"
                            alt="dima"
                            width={200}
                            height={60}
                            className="h-12 md:h-14 w-auto"
                        />
                    </div>

                    {/* Title Section */}
                    <div className="text-center mb-8 sm:mb-12 px-4">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                            Arabic Dialect Accuracy Lab
                        </h1>
                        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                            Live sandbox for testing sentiment and entity extraction across KSA, Egyptian,
                            Levantine, Maghrebi, and Gulf Arabic dialects
                        </p>
                    </div>

                    {/* Analyzer Component */}
                    <DialectAnalyzer />
                </div>
            </SectionWrapper>
        </main>
    );
}

export default ArabicDialectTool;