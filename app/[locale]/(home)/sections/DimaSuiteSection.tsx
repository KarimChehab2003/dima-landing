import SectionWrapper from "../../../../components/shared/SectionWrapper";
import SolutionCard from "../components/SolutionCard";
import RequestDemoButton from "../components/RequestDemoButton";
import { useTranslations } from "next-intl";
import { dimaSolutions } from "@/data/constants/links";

function DimaSuiteSection() {
    const t = useTranslations("Home.dimaSuite");
    return (
        <SectionWrapper>
            <div className="container mx-auto flex flex-col justify-center items-center gap-12">
                <h2 className="text-[24px] lg:text-[44px] font-normal text-center">
                    {t("title")}
                </h2>
                <RequestDemoButton size="xl" />

                <ul className="flex flex-wrap justify-center gap-12">
                    {dimaSolutions.map((solution) => (
                        <li key={solution.href} className="w-[275px]">
                            <SolutionCard
                                {...solution}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </SectionWrapper>
    );
}

export default DimaSuiteSection;
