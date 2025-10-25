"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RadialGradientProgress from "./RadialGradientProgress";
import Image from "next/image";

type ExpandableCardProps = {
    index: number;
    title: string;
    highlight: string;
    variant: "text-left-content-right" | "text-image" | "text-only";
};

export default function ExpandableCard({ index, title, highlight, variant, }: ExpandableCardProps) {
    const [hovered, setHovered] = useState(false);

    const formattedTitle = (
        <h3 className="text-2xl font-semibold mb-4">
            {title.split(" ").map((word, i) =>
                word.toLowerCase() === highlight.toLowerCase() ? (
                    <span key={i} className="text-primary">
                        {word + " "}
                    </span>
                ) : (
                    <span key={i}>{word + " "}</span>
                )
            )}
        </h3>
    );
    const baseClass =
        "relative flex flex-col items-center justify-center border rounded-2xl bg-white p-6 transition-all duration-500 ease-out overflow-hidden shadow-sm hover:shadow-md hover:shadow-primary";
    const expandedBasis = hovered ? "basis-2/3" : "basis-1/3";

    const renderVariantContent = () => {
        switch (variant) {
            case "text-left-content-right":
                return (
                    <div className="flex flex-col md:flex-row items-center gap-6 w-full mt-6">
                        <div className="flex flex-col md:text-left flex-1">
                            {formattedTitle}
                            <p className="text-gray-600">
                                Track tagged, untagged, misspelled, or Arabic mentions across
                                social, communities, and media.
                            </p>
                        </div>

                        <AnimatePresence>
                            {hovered && (
                                <motion.div
                                    key="progress"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="overflow-hidden flex flex-col items-center justify-center gap-4 flex-1"
                                >
                                    <RadialGradientProgress progress={100} />
                                    <RadialGradientProgress
                                        progress={90}
                                        innerColor="#11A8CF"
                                        outerColor="#11A8CF"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );

            case "text-image":
                return (
                    <div className="flex flex-col justify-center mt-6">
                        {formattedTitle}
                        <p className="text-gray-600 max-w-md">
                            Grow without constraints, unlimited users and keywords at enterprise scale.
                        </p>

                        <AnimatePresence>
                            {hovered && (
                                <motion.figure
                                    key="image"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "100%" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="overflow-hidden"
                                >
                                    <Image
                                        src="/woman-with-laptop2.png"
                                        alt="Woman with laptop"
                                        width={353}
                                        height={234}
                                        className="rounded-lg"
                                    />
                                </motion.figure>
                            )}
                        </AnimatePresence>
                    </div>
                );

            case "text-only":
                return (
                    <div className="flex flex-col justify-center mt-6 max-w-md">
                        {formattedTitle}
                        <p className="text-gray-600">
                            We partner with your team, embedding into your custom reporting
                            templates, dashboards, and daily workflows.
                        </p>
                    </div>
                );
        }
    };

    return (
        <motion.article
            layout
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`${baseClass} ${expandedBasis}`}
            transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
        >
            {/* Index */}
            <p className="absolute top-4 left-4 font-semibold text-muted-foreground">
                {index.toString().padStart(2, "0")}
            </p>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                {renderVariantContent()}
            </div>
        </motion.article>
    );
}
