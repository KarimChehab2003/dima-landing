// "use client";

import { Button } from "@/components/ui/button";
import SectionWrapper from "../components/SectionWrapper";
import { ArrowRight } from "lucide-react";
import QuestionsAccordion from "../components/QuestionsAccordion";
import { useLocale, useTranslations } from "next-intl";

function QuestionsAnsweredSection() {
  const t = useTranslations("Home.questionsAnswered");
  const locale = useLocale();
  const isRTL = locale === "ar";
  return (
    <SectionWrapper>
      <div
        className={`container mx-auto max-w-6xl flex flex-col lg:flex-row justify-between gap-12 ${
          isRTL ? "lg:flex-row-reverse text-right" : " text-left"
        }`}
      >
        <div className="space-y-6">
          <h2 className="text-[24px] lg:text-[44px] font-normal text-primary capitalize">
            {t("title")}
          </h2>
          <p className="text-muted-foreground font-light">{t("description")}</p>
          <Button size="lg">
            {t("request a demo")}
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
