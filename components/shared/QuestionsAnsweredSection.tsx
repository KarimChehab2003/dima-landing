
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import SectionWrapper from "./SectionWrapper";
import QuestionsAccordion from "@/app/[locale]/(home)/components/QuestionsAccordion";

function QuestionsAnsweredSection() {
    const t = useTranslations("Home.questionsAnswered");

    return (
        <SectionWrapper>
            <div className={`container mx-auto max-w-6xl flex flex-col lg:flex-row justify-between gap-12`}>
                <div className="space-y-6">
                    <h2 className="text-2xl lg:text-4xl font-bold text-primary capitalize">{t("title")}</h2>
                    <p className="text-muted-foreground text-lg font-medium">{t("description")}</p>
                    <Button dir="ltr">
                        <Link href="/request-demo">{t("request a demo")}</Link>
                        <div className="w-6 h-6 rounded-full bg-white flex justify-center items-center">
                            <ArrowRight color="black" />
                        </div>
                    </Button>
                </div>

                <QuestionsAccordion />
            </div>
        </SectionWrapper>
    );
}

export default QuestionsAnsweredSection;
