import Image from "next/image";
import Calculator from "./components/Calculator";
import SectionWrapper from "@/components/shared/SectionWrapper";

function ArabicMentionAnalyzerPage() {
    return (
        <SectionWrapper className="min-h-dvh mt-24">
            <div className="max-w-7xl mx-auto space-y-12">
                <figure className="flex justify-center">
                    <Image
                        src="/dima-logo.svg"
                        alt="dima"
                        width={200}
                        height={60}
                        className="h-12 md:h-14 w-auto"
                    />
                </figure>

                <Calculator />
            </div>
        </SectionWrapper>
    );
}

export default ArabicMentionAnalyzerPage;