"use client";
import SectionWrapper from "../../../../components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
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

  // Auto-cycle through buttons every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ownConversationInfo.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll active button into view
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const button = buttonRefs.current[activeIndex];
    const container = containerRef.current;

    if (button && container) {
      const buttonLeft = button.offsetLeft;
      const buttonWidth = button.offsetWidth;
      const containerWidth = container.offsetWidth;

      // Scroll horizontally so the button is centered
      container.scrollTo({
        left: buttonLeft - containerWidth / 2 + buttonWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <SectionWrapper>
      <div className="flex flex-col items-center w-full">
        {/* Header */}
        <div className="space-y-3 text-center max-w-3xl">
          <h2 className="text-[24px] md:text-[44px] font-normal my-4">
            {t("title")}
          </h2>
          <p className="text-base lg:text-xl lg:font-light text-muted-foreground">
            {t("description")}
          </p>
        </div>

        {/* Scrollable Buttons */}
        <div
          ref={containerRef}
          className="w-full overflow-x-auto py-4 md:my-4 hide-scrollbar"
        >
          <div
            className="
      flex gap-2 sm:gap-3 md:gap-4 px-2 sm:px-4 
      whitespace-nowrap 
      w-max
    "
          >
            {ownConversationInfo.map((feature, idx) => (
              <Button
                key={feature.translationKey}
                variant={activeIndex === idx ? "default" : "ghost"}
                size="xl"
                onClick={() => setActiveIndex(idx)}
                ref={(el) => { buttonRefs.current[idx] = el }}
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
          className="flex flex-col xl:flex-row items-center justify-between xl:justify-center w-full rounded-4xl bg-no-repeat xl:bg-[url(https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/HomePage%2FOwnConversation%2Fbg-vector.svg?alt=media&token=028ac753-b7f1-4a6e-925e-2e70467d8c5d)] bg-center"
          dir="ltr"
        >
          {/* Image Section */}
          <figure className="relative w-full max-w-[900px] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] overflow-hidden bg-linear-to-b xl:bg-none from-primary via-[#5FC9E7] to-[#AEEBFF] rounded-2xl sm:order-1 order-2">
            <Image
              src={activeFeature.image}
              alt={activeFeature.translationKey + ' icon'}
              fill
              className="object-contain z-10 p-6"
              priority
            />
          </figure>

          {/* Info + Button */}
          <div
            className={`flex flex-col justify-start text-center w-full xl:max-w-md z-30 lg:h-[500px] xl:h-[600px] xl:pl-22 sm:order-2 pb-4 ${isRTL
              ? 'text-right items-end xl:pr-6'
              : 'items-start text-left'
              }`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.translationKey}
                variants={textVariants}
                exit="exit"
                initial="hidden"
                animate="visible"
                className={`w-full xl:flex-1 flex flex-col justify-center ${isRTL
                  ? 'items-end text-right'
                  : 'items-start text-left'
                  }`}
              >
                <h3 className="text-2xl font-semibold my-4 sm:mb-6">
                  {t(`features.${activeFeature.translationKey}.title`)}
                </h3>
                <p className="text-base md:text-lg leading-relaxed">
                  {t(`features.${activeFeature.translationKey}.description`)}
                </p>
              </motion.div>
            </AnimatePresence>

            <div
              className={`my-4 w-full xl:flex-1 flex justify-center ${isRTL ? 'md:justify-end' : 'md:justify-start'
                }`}
            >
              <RequestDemoButton size={"xl"} className="mt-4" />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default OwnConversationSection;
