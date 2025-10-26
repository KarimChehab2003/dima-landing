"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { questionsAnsweredInfo } from "@/data/constants/info";
import { useState } from "react";

function QuestionsAccordion() {
    const [openItem, setOpenItem] = useState<string>("item-1");
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
                questionsAnsweredInfo.map(({ question, answer }, i) => {
                    const value = `item-${i + 1}`;
                    const isOpen = value === openItem;

                    return <AccordionItem
                        key={question}
                        value={value}
                        className="bg-white rounded-xl py-3 px-6"
                    >
                        <AccordionTrigger className={`text-lg transition-all hover:no-underline ${isOpen ? "font-bold" : "font-medium"}`}>{question}</AccordionTrigger>
                        <AccordionContent className="text-sm/relaxed">{answer}</AccordionContent>
                    </AccordionItem>
                })
            }
        </Accordion>
    );
}

export default QuestionsAccordion;