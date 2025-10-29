import { caseStudiesInfo } from "@/data/constants/info";
import SectionWrapper from "../components/SectionWrapper";
import CaseStudyCard from "../components/CaseStudyCard";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

function CaseStudiesSection() {
    const t = useTranslations("Home.caseStudies");
    return (
        <SectionWrapper>
            <div className="container mx-auto max-w-5xl flex flex-col gap-6">
                <h2 className="text-4xl sm:text-5xl text-center">{t("title")}</h2>
                <p className="text-xl text-muted-foreground text-center">{t("description")}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-muted p-3 rounded-xl">
                    {
                        caseStudiesInfo.map((info) => (
                            <li key={info.image}>
                                <CaseStudyCard {...info} />
                            </li>
                        ))
                    }
                </ul>
                <div className="flex justify-center items-center">
                    <Link href="/case-studies">
                        <Button variant="outline" size="lg">{t("cta")}</Button>
                    </Link>
                </div>
            </div>
        </SectionWrapper>
    );
}

export default CaseStudiesSection;