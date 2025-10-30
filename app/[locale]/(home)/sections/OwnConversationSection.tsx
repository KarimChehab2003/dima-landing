"use client";
import { ownConversationInfo } from "@/data/constants/info";
import SectionWrapper from "../components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import { ConversationInfo } from "@/types/info";
import { FaDisplay } from "react-icons/fa6";
import { Link } from "@/i18n/navigation";
import { motion, AnimatePresence, easeOut, easeIn } from "motion/react";
import { useTranslations, useLocale } from "next-intl";
import RequestDemoButton from "../components/RequestDemoButton";

const textVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: easeOut } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2, ease: easeIn } },
};

function OwnConversationSection() {
    const t = useTranslations("Home.ownConversation");
    const [activeIndex, setActiveIndex] = useState<number>(4);
    const activeFeature: ConversationInfo = ownConversationInfo[activeIndex];
    const locale = useLocale();
    const isRTL = locale === "ar";

    return (
        <SectionWrapper>
            <div className="flex flex-col items-center gap-8 w-full">
                {/* Header */}
                <div className="space-y-3 text-center max-w-3xl">
                    {/* Title per spec */}
                    <h2 className="text-[24px] lg:text-[44px] font-normal my-4">
                        {t("title")}
                    </h2>
                    {/* Body text per spec */}
                    <p className="text-base sm:text-lg lg:text-[24px] lg:font-light text-muted-foreground">
                        {t("description")}
                    </p>
                </div>

                {/* Scrollable Buttons */}
                <div className="w-full max-w-4xl overflow-x-auto py-4">
                    <div className="flex justify-start items-center gap-2 sm:gap-3 md:gap-4 px-2 sm:px-4 whitespace-nowrap">
                        {ownConversationInfo.map((info, idx) => {
                            const keys = [
                                "listenAnalyzeAct",
                                "growYourBrandWithTheRightPartners",
                                "dailyMonitoringCoverageReportsForAllYourClients",
                                "elevateYourSocialPresence",
                                "benchmarkPerformance",
                                "understandYourAudienceEverywhere",
                                "collectAnalyzeReviews",
                            ] as const;
                            const k = keys[idx];
                            const localizedTitle = t(`features.${k}.title`);
                            return (
                            <Button
                                key={info.title}
                                variant={activeIndex === idx ? "default" : "ghost"}
                                
                                onClick={() => setActiveIndex(idx)}
                                className="inline-flex items-center gap-2 text-sm sm:text-base px-3 sm:px-4 md:px-6 shrink-0"
                            >
                                <info.icon size={16} className="sm:size-5" />
                                <span>{localizedTitle}</span>
                            </Button>
                        );})}
                    </div>
                </div>



                {/* Image + Text */}
                <div
                    className="flex flex-col xl:flex-row items-center justify-between xl:justify-center w-full rounded-4xl mt-6 bg-no-repeat xl:bg-[url(/bg-vector.png)] bg-center"
                    // style={
                    //     {
                    //         backgroundImage: "url('/bg-vector.png')",
                    //         backgroundPosition: "center"
                    //     }
                    // }
                >
                    {/* Image Section */}
                    <figure className="relative w-full max-w-[900px] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] overflow-hidden bg-linear-to-b xl:bg-none from-primary via-[#5FC9E7] to-[#AEEBFF] rounded-2xl">
                        {/* Image */}
                        <Image
                            src={activeFeature?.image}
                            alt={activeFeature?.title}
                            fill
                            className="object-contain z-10 p-6"
                            priority
                        />
                    </figure>

                    {/* Info + Button  */}
                    <div className={`flex flex-col justify-end text-center w-full xl:max-w-md  z-30 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] xl:pl-34 ${isRTL ? 'text-right items-end ' : 'items-start text-left '}`}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeFeature.title}
                                variants={textVariants}
                                exit="exit"
                                initial="hidden"
                                animate="visible"
                                className={`w-full flex-1 flex flex-col justify-center ${isRTL ? 'items-end text-right' : 'items-start text-left'}`}
                            >
                                <h3 className="text-2xl font-semibold my-4 sm:mb-6">
                                    {t(`features.${[
                                        "listenAnalyzeAct",
                                        "growYourBrandWithTheRightPartners",
                                        "dailyMonitoringCoverageReportsForAllYourClients",
                                        "elevateYourSocialPresence",
                                        "benchmarkPerformance",
                                        "understandYourAudienceEverywhere",
                                        "collectAnalyzeReviews",
                                    ][activeIndex]}.title`)}
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                                    {t(`features.${[
                                        "listenAnalyzeAct",
                                        "growYourBrandWithTheRightPartners",
                                        "dailyMonitoringCoverageReportsForAllYourClients",
                                        "elevateYourSocialPresence",
                                        "benchmarkPerformance",
                                        "understandYourAudienceEverywhere",
                                        "collectAnalyzeReviews",
                                    ][activeIndex]}.description`)}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <div className="mt-6 w-full flex-1 flex justify-center xl:justify-start">
                           <div className="[&_button]:font-normal [&_button]:lg:py-4 [&_button]:lg:px-8 [&_button]:py-[14px] [&_button]:px-[24px] [&_button]:text-[16px]">
                               <RequestDemoButton />
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}

export default OwnConversationSection;
