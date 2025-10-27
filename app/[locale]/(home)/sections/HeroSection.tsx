"use client";

import { Button } from "@/components/ui/button";
import { LucideMonitor } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import HeroCarousel from "../components/HeroCarousel";
import LogoCarousel from "../components/LogoCarousel";
import SectionWrapper from "../components/SectionWrapper";
import { Link } from "@/i18n/navigation";

const slides = [
    { title: "Social Listening & Media Monitoring", image: "/hero-carousel-item-1.png" },
    { title: "Consumer & Business Insights", image: "/hero-carousel-item-2.png" },
    { title: "Sentiment, Emotion & Topic Insights", image: "/hero-carousel-item-3.png" },
];

const logos = [
    {
        image: "/logos-carousel/ooredoo.png"
    },
    {
        image: "/logos-carousel/benchmark.png"
    },
    {
        image: "/logos-carousel/juhayna.png"
    },
    {
        image: "/logos-carousel/wadi-degla.png"
    },
    {
        image: "/logos-carousel/exxon-mobil.png"
    },
    {
        image: "/logos-carousel/coca-cola.png"
    },
    {
        image: "/logos-carousel/ooredoo.png"
    },
    {
        image: "/logos-carousel/benchmark.png"
    },
    {
        image: "/logos-carousel/juhayna.png"
    },
    {
        image: "/logos-carousel/wadi-degla.png"
    },
    {
        image: "/logos-carousel/exxon-mobil.png"
    },
    {
        image: "/logos-carousel/coca-cola.png"
    },
]

export default function HeroSection() {
    const [selectedIndex, setSelectedIndex] = useState(0);

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
                    className="flex-1 mt-12 lg:mt-0 overflow-hidden max-w-4xl mx-auto flex items-center"
                    style={{
                        backgroundImage: "url('dima-carousel-background.png')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: "690px",
                    }}
                >
                    <HeroCarousel slides={slides} selectedIndex={selectedIndex} onSelectSlide={setSelectedIndex} />
                </div>
            </div>
            <LogoCarousel logos={logos} />
        </SectionWrapper>
    );
}
