import SectionWrapper from "@/components/shared/SectionWrapper";
import { ArabicCoverageWizard } from "./components/ArabicCoverageWizard";
import Image from "next/image";
import { useTranslations } from "next-intl";

function ArabicCoverageGapAudit() {
    const t = useTranslations("Tools.arabic-coverage-gap-audit")
    return (
        <main>
            <SectionWrapper className="min-h-dvh mt-24">
                <div className="container mx-auto">
                    {/* Logo at top center */}
                    <div className="flex justify-center mb-12">
                        <Image
                            src="/dima-logo.svg"
                            alt="dima"
                            width={200}
                            height={60}
                            className="h-12 md:h-14 w-auto"
                        />
                    </div>

                    {/* Main heading */}
                    <div className="text-center mb-12 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                            {t("title")}
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            {t("description")}
                        </p>
                    </div>

                    {/* Wizard Component */}
                    <ArabicCoverageWizard />
                </div>
            </SectionWrapper>
        </main>
    );
}

export default ArabicCoverageGapAudit;