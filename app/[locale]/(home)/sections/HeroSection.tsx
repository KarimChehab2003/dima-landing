"use client";

import { Button } from "@/components/ui/button";
import { LucideMonitor } from "lucide-react";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import HeroCarousel from "../components/HeroCarousel";
import LogoCarousel from "../components/LogoCarousel";
import SectionWrapper from "../components/SectionWrapper";
import { Link } from "@/i18n/navigation";
import HeroCarousel2 from "../components/HeroCarousel2";
import Herocarousel3 from "../components/HeroCarousel3";

const slides = [
    { title: "Social Listening & Media Monitoring", image: "/hero-carousel-item-1.png" },
    { title: "Influencer Tracking", image: "/hero-carousel-item-2.png" },
    { title: "Sentiment, Emotion & Topic Insights", image: "/hero-carousel-item-3.png" },
    { title: "Competitor Benchmarking", image: "/hero-carousel-item-3.png" },
    { title: "Discovering Organic Creators", image: "/hero-carousel-item-3.png" },
    { title: "Measuring Campaign ROI", image: "/hero-carousel-item-3.png" },
];

export default function HeroSection() {
    const [selectedIndex, setSelectedIndex] = useState(1);


    return (
        <SectionWrapper className="flex-col justify-between min-h-dvh">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between overflow-hidden grow px-4 py-8 md:py-0">
                {/* Left Side: Dynamic Text */}
                <div className="flex-1 space-y-6">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-8">
                        The Arabic-First AI Copilot For&nbsp;
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
                            <span className="capitalize">Request a demo</span>
                        </Button>
                    </Link>
                </div>

                {/* Right Side: Carousel*/}
                <div
                    className="flex-1 mt-12 lg:mt-0 overflow-hidden mx-auto flex items-center w-full max-w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
                    style={{
                        backgroundImage: "url('/dima-carousel-background.png')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    {/* <HeroCarousel2 slides={slides} activeSlide={selectedIndex} setActiveSlide={setSelectedIndex} /> */}
                    <Herocarousel3 slides={slides} activeSlide={selectedIndex} setActiveSlide={setSelectedIndex} />
                </div>

            </div>
            <div className="container mx-auto">
                <h2 className="text-2xl sm:text-3xl text-center">Trusted by 250+ leading agencies & enterprises in GCC & MENA</h2>
                <LogoCarousel />
            </div>
        </SectionWrapper>
    );
}
