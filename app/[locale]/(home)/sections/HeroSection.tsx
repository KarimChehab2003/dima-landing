"use client";

import { Button } from "@/components/ui/button";
import { LucideMonitor } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import LogoCarousel from "../components/LogoCarousel";
import SectionWrapper from "../components/SectionWrapper";
import { Link } from "@/i18n/navigation";
import HeroCarousel from "../components/HeroCarousel";
import { useTranslations } from "next-intl";

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
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between overflow-hidden grow px-4 py-8">
                {/* Left Side: Dynamic Text */}
                <div className="flex-1 space-y-6">
                    <h1 className="text-4xl sm:text-5xl font-normal mb-8">
                        {t("titlePrefix")} &nbsp;
                        <motion.span
                            key={selectedIndex}
                            initial={{ x: -40, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block text-primary"
                        >
                            {slides[selectedIndex].title}
                        </motion.span>
                    </h1>
                    <Link href="/request-demo">
                        <Button size="2xl">
                            <LucideMonitor />
                            <span className="capitalize">{t("cta")}</span>
                        </Button>
                    </Link>
                </div>

                {/* Right Side: Carousel*/}
                <div
                    className="flex-1 mt-12 lg:mt-0 overflow-hidden mx-auto flex items-center w-full max-w-full h-[320px] md:h-[500px] lg:h-[600px]"
                    style={{
                        backgroundImage: "url('/dima-carousel-background.png')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <HeroCarousel slides={slides} activeSlide={selectedIndex} setActiveSlide={setSelectedIndex} />
                </div>

            </div>
            <div className="container mx-auto">
                <h2 className="text-2xl sm:text-3xl text-center">{t("trustedBy")}</h2>
                <LogoCarousel />
            </div>
        </SectionWrapper>
    );
}
