"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { QuestionAccordion } from "@/types/info";
import Link from "next/link";

type QuestionAccordionProps = {
    pageSlug?: string;
};

export default function QuestionsAccordion({ pageSlug }: QuestionAccordionProps) {
    const [openItem, setOpenItem] = useState<string>("item-1");
    const locale = useLocale();
    const isRTL = locale === "ar";

    const t = useTranslations(pageSlug ? `Solutions.${pageSlug}` : "Home.questionsAnswered");
    const faqs = t.raw("faqs") as QuestionAccordion[];

    return (
        <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            value={openItem}
            onValueChange={(value) => setOpenItem(value)}
            className="w-full bg-muted rounded-xl p-2 space-y-2"
        >
            {faqs.map(({ question, answer }, i) => {
                const value = `item-${i + 1}`;
                const isOpen = value === openItem;

                return (
                    <AccordionItem
                        key={i}
                        value={value}
                        className="bg-white rounded-xl py-4 px-6"
                    >
                        <AccordionTrigger
                            className={`text-lg transition-all hover:no-underline ${isOpen ? "font-bold" : "font-medium"
                                } ${isRTL ? "text-right" : "text-left"}`}
                        >
                            {question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm/relaxed mt-4">
                            {/* Finding hyperlinks if exists */}
                            {answer.split(/<link>|<\/link>/).map((part, idx) =>
                                idx % 2 === 1 ? (
                                    <Link key={idx} href="/solutions/market-insights" className="text-primary underline">
                                        {part}
                                    </Link>
                                ) : (
                                    <span key={idx}>{part}</span>
                                )
                            )}
                        </AccordionContent>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
}
