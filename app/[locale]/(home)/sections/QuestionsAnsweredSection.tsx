// "use client";

import { Button } from "@/components/ui/button";
import SectionWrapper from "../components/SectionWrapper";
import { ArrowRight } from "lucide-react";
import QuestionsAccordion from "../components/QuestionsAccordion";


function QuestionsAnsweredSection() {
    return (
        <SectionWrapper>
            <div className="container mx-auto max-w-6xl flex justify-between gap-12">
                <div className="space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary">Your questions, answered</h2>
                    <p className="text-muted-foreground font-medium">Get quick answers to the most common questions about our platform and services.</p>
                    <Button size="lg">
                        Contact us
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