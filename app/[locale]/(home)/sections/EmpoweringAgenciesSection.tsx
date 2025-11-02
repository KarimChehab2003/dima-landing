import SectionWrapper from "../components/SectionWrapper";
import EmpoweringAgenciesCard from "../components/EmpoweringAgenciesCard";
import { useTranslations } from "next-intl";
import { empoweringAgenciesInfo } from "@/data/constants/info";

function EmpoweringAgenciesSection() {
    const t = useTranslations("Home.empoweringAgencies");

    const cardKeys = ["fullCoverage", "accurateArabicAnalysis", "mentionsCaptured"] as const;

    const cards = empoweringAgenciesInfo.map((info, idx) => {
        const key = cardKeys[idx];
        return {
            ...info,
            title: t(`cards.${key}.title`),
            description: t(`cards.${key}.description`),
        };
    });

    return (
        <SectionWrapper className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-16">
            <div
                className="container mx-auto space-y-10 md:space-y-14 bg-no-repeat bg-contain"
                style={{
                    backgroundImage: "url('/empowering-agencies-bg.png')",
                    backgroundPosition: "right center",
                }}
                dir="ltr"
            >
                {/* Heading */}
                <h2 className="text-[24px] lg:text-[44px] font-normal text-center leading-tight">
                    {t("titlePrefix")} &nbsp;
                    <span className="block text-primary">{t("titleSuffix")}</span>
                </h2>

                {/* Cards Grid */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
                    {cards.map((info) => (
                        <li key={info.title}>
                            <EmpoweringAgenciesCard {...info} />
                        </li>
                    ))}
                </ul>
            </div>
        </SectionWrapper>
    );
}

export default EmpoweringAgenciesSection;
