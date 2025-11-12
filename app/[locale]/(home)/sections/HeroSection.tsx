"use client";

import { useState } from "react";
import LogoCarousel from "../components/LogoCarousel";
import SectionWrapper from "../../../../components/shared/SectionWrapper";
import { useTranslations, useLocale } from "next-intl";
import CyclicSwapCards from "../components/CyclicCardRotation";
import Typewriter from "typewriter-effect";
import RequestDemoButton from "../../../../components/shared/RequestDemoButton";
import { heroSlides } from "@/data/constants/info";


export default function HeroSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const t = useTranslations("Home.hero");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const slides = heroSlides.map((slide) => ({
    title: t(slide.translationKey),
    image: slide.image,
  }));

  return (
    <SectionWrapper className="flex-col justify-between min-h-dvh my-8 lg:my-0">
      <div
        className={`container mx-auto flex flex-col lg:flex-row items-center justify-between overflow-hidden grow px-4 py-8 gap-4`}
      >
        {/* Left Side: Dynamic Text */}
        <div className="flex-1 space-y-6 w-full text-center lg:text-start">

          <h1 className="text-2xl md:text-[44px] mb-8 min-h-32 lg:min-h-60 xl:min-h-auto">
            {t("titlePrefix")}
            <Typewriter
              options={{
                strings: [slides[selectedIndex].title],
                autoStart: true,
                delay: 35,
                deleteSpeed: 25,
                wrapperClassName: "text-primary",
              }}
            />
          </h1>
          <RequestDemoButton size={"xl"} />
        </div>

        {/* Right Side: Carousel*/}
        <div className={`flex-1 mt-12 lg:mt-0 overflow-hidden mx-auto flex items-center w-full max-w-full h-80 md:h-[500px] lg:h-[600px] ${isRTL ? "lg:order-1" : "lg:order-2"}`}
          style={{
            backgroundImage: "url('/dima-carousel-background.webp')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <CyclicSwapCards
            cards={slides}
            selectedIndex={selectedIndex}
            onIndexChange={setSelectedIndex}
          />
        </div>
      </div>
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl text-center">{t("trustedBy")}</h2>
        <LogoCarousel />
      </div>
    </SectionWrapper>
  );
}
