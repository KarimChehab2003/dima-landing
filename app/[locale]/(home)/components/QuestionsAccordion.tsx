"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

function QuestionsAccordion() {
    const [openItem, setOpenItem] = useState<string>("item-1");
    const t = useTranslations("Home.questionsAnswered.faqs");
    const locale = useLocale();
    const isRTL = locale === "ar";

    const faqs = [
        { key: "faq1", question: t("faq1.question"), answer: t("faq1.answer") },
        { key: "faq2", question: t("faq2.question"), answer: t("faq2.answer") },
        { key: "faq3", question: t("faq3.question"), answer: t("faq3.answer") }
    ];

    return (
        <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            value={openItem}
            onValueChange={(value) => setOpenItem(value)}
            className="w-full bg-muted rounded-xl p-2 space-y-4"
        >
            {
                faqs.map(({ key, question, answer }, i) => {
                    const value = `item-${i + 1}`;
                    const isOpen = value === openItem;

                    return <AccordionItem
                        key={key}
                        value={value}
                        className="bg-white rounded-xl py-3 px-6"
                    >
                        <AccordionTrigger className={`text-lg transition-all hover:no-underline ${isOpen ? "font-bold" : "font-medium"} ${isRTL ? "flex-row-reverse" : "flex-row"}`}>
                            {question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm/relaxed">
                            {answer}
                        </AccordionContent>
                    </AccordionItem>
                })
            }
        </Accordion>
    );
}

export default QuestionsAccordion;