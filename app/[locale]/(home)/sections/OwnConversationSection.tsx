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
import { useTranslations } from "next-intl";

const textVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: easeOut } },
    exit: { opacity: 0, x: -40, transition: { duration: 0.2, ease: easeIn } },
};

function OwnConversationSection() {
    const t = useTranslations("Home.ownConversation");
    const [activeIndex, setActiveIndex] = useState<number>(4);
    const activeFeature: ConversationInfo = ownConversationInfo[activeIndex];

    return (
        <SectionWrapper className="justify-center items-center px-6 sm:px-10 lg:px-20 py-12">
            <div className="flex flex-col items-center gap-8 w-full">
                {/* Header */}
                <div className="space-y-3 text-center max-w-3xl">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold my-4">
                        {t("title")}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                        {t("description")}
                    </p>
                </div>

                {/* Scrollable Buttons */}
                <div className="w-full max-w-4xl overflow-x-auto  py-4">
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
                                size="sm"
                                onClick={() => setActiveIndex(idx)}
                                className="inline-flex items-center gap-2 text-sm sm:text-base px-3 sm:px-4 md:px-6 flex-shrink-0"
                            >
                                <info.icon size={16} className="sm:size-5" />
                                <span>{localizedTitle}</span>
                            </Button>
                        );})}
                    </div>
                </div>



                {/* Image + Text */}
                <div
                    className="flex flex-col lg:flex-row items-start lg:items-center justify-center w-full relative bg-none sm:bg-none lg:bg-linear-to-b from-[#AEEBFF] to-primary rounded-4xl mt-6 h-auto"
                >
                    {/* Image Section */}
                    <figure className="relative w-full max-w-[900px] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] overflow-hidden bg-linear-to-t lg:bg-none from-[#AEEBFF] to-primary rounded-2xl">
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
                    <div className="flex flex-col justify-between items-start lg:items-start h-full w-full lg:max-w-md p-8 bg-white lg:bg-transparent z-30">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeFeature.title}
                                variants={textVariants}
                                exit="exit"
                                initial="hidden"
                                animate="visible"
                                className="w-full text-left flex-1"
                            >
                                <h3 className="text-xl xl:text-2xl font-bold text-foreground mb-4 sm:mb-6">
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

                        <div className="mt-6 flex-1">
                            <Link href="/request-demo">
                                <Button size="2xl" className="flex items-center gap-2 text-sm sm:text-base">
                                    <FaDisplay className="size-4 sm:size-5" />
                                    <span>{t("features.requestDemo")}</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}

export default OwnConversationSection;
