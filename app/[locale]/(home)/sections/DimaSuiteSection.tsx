import { Button } from "@/components/ui/button";
import SectionWrapper from "../components/SectionWrapper";
import { dimaSolutions } from "@/data/constants/links";
import SolutionCard from "../components/SolutionCard";
import { FaDisplay } from "react-icons/fa6";
import { useTranslations } from "next-intl";

function DimaSuiteSection() {
    const t = useTranslations("Home.dimaSuite");
    return (
        <SectionWrapper>
            <div className="container mx-auto flex flex-col justify-center items-center gap-12">
                <h2 className="text-4xl sm:text-5xl text-center">{t("title")}</h2>
                <Button size="2xl" className="flex items-center gap-2">
                    <FaDisplay className="size-5" />
                    <span>{t("cta")}</span>
                </Button>

                <ul className="flex flex-wrap justify-center gap-12">
                    {
                        dimaSolutions.map((solution) => {
                            const keyByHref: Record<string, keyof typeof import("@/data/constants/links").dimaSolutions | string> = {
                                "/solutions/consumer-insights": "consumerInsights",
                                "/solutions/social-listening-analytics": "socialListening",
                                "/solutions/pr-and-comms": "prComms",
                                "/solutions/own-page-intelligence": "ownPageIntelligence",
                                "/solutions/market-insights": "marketInsights",
                                "/solutions/customer-experience": "customerExperience",
                                "/solutions/influencer-marketing": "influencerMarketing",
                            };
                            const key = keyByHref[solution.href] as string | undefined;
                            const localizedTitle = key ? t(`solutions.${key}.title`) : solution.title;
                            const localizedDesc = key ? t(`solutions.${key}.description`) : solution.subTitle;
                            return (
                                <li key={solution.href} className="w-[275px]">
                                    <SolutionCard {...solution} title={localizedTitle} subTitle={localizedDesc} />
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </SectionWrapper>
    );
}

export default DimaSuiteSection;