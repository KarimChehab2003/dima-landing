"use client";

import { Button } from "@/components/ui/button";
import { LucideMonitor } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import HeroCarousel from "../components/HeroCarousel";

const slides = [
    { title: "Innovation", image: "/hero-carousel-item-1.png" },
    { title: "Creativity", image: "/hero-carousel-item-2.png" },
    { title: "Productivity", image: "/hero-carousel-item-3.png" },
];

export default function HeroSection() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <section className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-20 overflow-hidden">
            {/* Left Side: Dynamic Text */}
            <div className="flex-1 space-y-6">
                <h1 className="text-4xl sm:text-5xl font-bold">
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
                <Button size="lg">
                    <LucideMonitor />
                    <span className="capitalize">Request a demo</span>
                </Button>
            </div>

            {/* Right Side: Carousel*/}
            <div
                className="flex-1 mt-12 lg:mt-0 overflow-hidden max-w-4xl mx-auto flex items-center"
                style={{
                    backgroundImage: "url('dima-carousel-background.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "690px",

                }}
            >
                <HeroCarousel slides={slides} selectedIndex={selectedIndex} onSelectSlide={setSelectedIndex} />
            </div>
        </section>
    );
}
