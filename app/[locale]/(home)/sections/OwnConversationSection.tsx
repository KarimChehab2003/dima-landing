"use client";
import SectionWrapper from "../../../../components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, easeOut, easeIn } from "motion/react";
import { useTranslations, useLocale } from "next-intl";
import RequestDemoButton from "../../../../components/shared/RequestDemoButton";
import { ownConversationInfo } from "@/data/constants/info";

const textVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: easeOut } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2, ease: easeIn } },
};

function OwnConversationSection() {
  const t = useTranslations("Home.ownConversation");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [activeIndex, setActiveIndex] = useState<number>(4);
  const activeFeature = ownConversationInfo[activeIndex];

  return (
    <SectionWrapper>
      <div className="flex flex-col items-center gap-8 w-full">
        {/* Header */}
        <div className="space-y-3 text-center max-w-3xl">
          <h2 className="text-[24px] lg:text-[44px] font-normal my-4">
            {t("title")}
          </h2>
          <p className="text-base lg:text-lg lg:font-light text-muted-foreground">
            {t("description")}
          </p>
        </div>

        {/* Scrollable Buttons */}
        <div className="w-full overflow-x-auto py-4">
          <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 px-2 sm:px-4 whitespace-nowrap">
            {
              ownConversationInfo.map((feature, idx) => (
                <Button
                  key={feature.translationKey}
                  variant={activeIndex === idx ? "default" : "ghost"}
                  size={"xl"}
                  onClick={() => setActiveIndex(idx)}
                  className="inline-flex items-center gap-2 text-sm sm:text-base px-3 sm:px-4 md:px-6 shrink-0 tracking-normal"
                >
                  <feature.icon size={16} />
                  <span>{t(`features.${feature.translationKey}.title`)}</span>
                </Button>
              ))}
          </div>
        </div>

        {/* Image + Text */}
        <div
          className="flex flex-col xl:flex-row items-center justify-between xl:justify-center w-full rounded-4xl mt-6 bg-no-repeat xl:bg-[url(https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/HomePage%2FOwnConversation%2Fbg-vector.svg?alt=media&token=028ac753-b7f1-4a6e-925e-2e70467d8c5d)] bg-center"
          dir="ltr"
        >
          {/* Image Section */}
          <figure className="relative w-full max-w-[900px] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] overflow-hidden bg-linear-to-b xl:bg-none from-primary via-[#5FC9E7] to-[#AEEBFF] rounded-2xl">
            <Image
              src={activeFeature.image}
              alt={activeFeature.translationKey + " icon"}
              fill
              className="object-contain z-10 p-6"
              priority
            />
          </figure>

          {/* Info + Button */}
          <div
            className={`flex flex-col justify-end text-center w-full xl:max-w-md z-30 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] xl:pl-22 ${isRTL
              ? "text-right items-end xl:pr-6"
              : "items-start text-left"
              }`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.translationKey}
                variants={textVariants}
                exit="exit"
                initial="hidden"
                animate="visible"
                className={`w-full flex-1 flex flex-col justify-center ${isRTL
                  ? "items-end text-right"
                  : "items-start text-left"
                  }`}
              >
                <h3 className="text-2xl font-semibold my-4 sm:mb-6">
                  {t(`features.${activeFeature.translationKey}.title`)}
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  {t(`features.${activeFeature.translationKey}.description`)}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className={`mt-6 w-full flex-1 flex justify-center ${isRTL ? "xl:justify-end" : "xl:justify-start"}`}>
              <RequestDemoButton size={"xl"} />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default OwnConversationSection;
