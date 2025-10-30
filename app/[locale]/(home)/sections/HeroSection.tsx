"use client";

import { Button } from "@/components/ui/button";
import { LucideMonitor } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import LogoCarousel from "../components/LogoCarousel";
import SectionWrapper from "../components/SectionWrapper";
import { Link } from "@/i18n/navigation";
import HeroCarousel from "../components/HeroCarousel";
import { useTranslations, useLocale } from "next-intl";
import CyclicSwapCards from "../components/CyclicSwapCards";
import Typewriter from "typewriter-effect"
import Image from "next/image";
import RequestDemoButton from "../components/RequestDemoButton";

const slidesImages = [
    "/hero-carousel-item-1.png",
    "/hero-carousel-item-2.png",
    "/hero-carousel-item-3.png",
    "/hero-carousel-item-3.png",
    "/hero-carousel-item-3.png",
    "/hero-carousel-item-3.png",
];


export default function HeroSection() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const t = useTranslations("Home.hero");
    const locale = useLocale();
    const isRTL = locale === "ar";
    const slideTitles = [
        t("slides.socialListening"),
        t("slides.influencerTracking"),
        t("slides.sentimentInsights"),
        t("slides.competitorBenchmarking"),
        t("slides.discoverCreators"),
        t("slides.campaignRoi"),
    ];
    const slides = slideTitles.map((title, idx) => ({ title, image: slidesImages[idx] }));

    return (
        <SectionWrapper className="flex-col justify-between min-h-dvh">
            <div className={`container mx-auto flex flex-col lg:flex-row items-center justify-between overflow-hidden grow px-4 py-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {/* Left Side: Dynamic Text */}
                <div className={`flex-1 space-y-6 ${isRTL ? 'text-right order-2' : 'order-1'}`}>
                    <h1 className="text-2xl xl:text-5xl mb-8 ">
                        {t("titlePrefix")}
                        <Typewriter
                            options={{
                                strings: [slides[selectedIndex].title],
                                autoStart: true,
                                delay: 35,
                                deleteSpeed: 25,
                                wrapperClassName: "text-primary",
                                cursor: isRTL ? "" : "|"
                            }}
                        />
                    </h1>
                    <RequestDemoButton />
                </div>

                {/* Right Side: Carousel*/}
                <div
                    className={`flex-1 mt-12 lg:mt-0 overflow-hidden mx-auto flex items-center w-full max-w-full h-80 md:h-[500px] lg:h-[600px] ${isRTL ? 'order-1' : 'order-2'}`}
                    style={{
                        backgroundImage: "url('/dima-carousel-background.png')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <CyclicSwapCards cards={slides} selectedIndex={selectedIndex} onIndexChange={setSelectedIndex} />
                </div>

            </div>
            <div className="container mx-auto">
                <h2 className="text-2xl sm:text-3xl text-center">{t("trustedBy")}</h2>
                <LogoCarousel />
            </div>
        </SectionWrapper>
    );
}
