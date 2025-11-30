import SectionWrapper from "../../../../components/shared/SectionWrapper";
import SolutionCard from "../components/SolutionCard";
import RequestDemoButton from "../../../../components/shared/RequestDemoButton";
import { useTranslations } from "next-intl";
import { dimaSolutions } from "@/data/constants/links";

function DimaSuiteSection() {
    const t = useTranslations("Home.dimaSuite");
    return (
        <SectionWrapper>
            <div className="container mx-auto flex flex-col justify-center items-center">
                <h2 className="text-[24px] lg:text-[44px] font-normal text-center mb-4">
                    {t("title")}
                </h2>
                <RequestDemoButton size="xl" />

                <ul className="flex flex-wrap justify-center gap-12 mt-12">
                    {dimaSolutions.map((solution) => (
                        <li key={solution.href} className="w-full md:w-[275px]">
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
