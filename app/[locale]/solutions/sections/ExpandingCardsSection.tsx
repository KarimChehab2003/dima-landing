"use client";

import { actionableInsightsCardsInfo } from "@/data/constants/info";
import SectionWrapper from "../../../../components/shared/SectionWrapper";
import ExpandingCard from "../components/ExpandingCard";
import { useState } from "react";

function ActionableInsightsSection() {
    const [expandedIndex, setExpandedIndex] = useState<number>(0);
    return (
        <SectionWrapper>
            <div className="container mx-auto flex flex-col justify-center items-center gap-8 my-12">
                {/* Heading */}
                <h2 className="text-2xl lg:text-[44px] text-center">Hear every conversation and turn noise into actionable insights</h2>

                {/* Expanding Cards */}
                <div className="flex flex-col lg:flex-row justify-between items-stretch gap-8 w-full max-w-5xl lg:max-h-48">
                    {
                        actionableInsightsCardsInfo.map((card, i) => (
                            <ExpandingCard
                                key={card.title}
                                {...card}
                                isExpanded={expandedIndex === i}
                                onClick={() => setExpandedIndex(i)} />
                        ))
                    }
                </div>
            </div>
        </SectionWrapper>
    );
}

export default ActionableInsightsSection;