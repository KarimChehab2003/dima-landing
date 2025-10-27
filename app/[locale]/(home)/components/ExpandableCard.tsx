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

export default function ExpandableCard({
    index,
    title,
    highlight,
    variant,
}: ExpandableCardProps) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => setExpanded((prev) => !prev);

    const formattedTitle = (
        <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 leading-snug text-center md:text-left">
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
        "relative flex flex-col items-center justify-center border rounded-2xl bg-white p-4 sm:p-6 transition-all duration-500 ease-out overflow-hidden shadow-sm cursor-pointer hover:shadow-md hover:shadow-primary";

    // Only apply expansion effect on medium+ screens
    const expandedBasis = expanded ? "md:basis-2/3" : "md:basis-1/3";

    const renderVariantContent = () => {
        switch (variant) {
            case "text-left-content-right":
                return (
                    <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 w-full mt-4 sm:mt-6 text-center md:text-left">
                        <div className="flex flex-col flex-1">
                            {formattedTitle}
                            <p className="text-gray-600 text-sm sm:text-base">
                                Track tagged, untagged, misspelled, or Arabic mentions across
                                social, communities, and media.
                            </p>
                        </div>

                        <AnimatePresence>
                            {expanded && (
                                <motion.div
                                    key="progress"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="hidden md:flex flex-col items-center justify-center gap-4 flex-1"
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
                    <div className="flex flex-col justify-center items-center md:items-start mt-4 sm:mt-6 text-center md:text-left">
                        {formattedTitle}
                        <p className="text-gray-600 text-sm sm:text-base max-w-sm">
                            Grow without constraints, unlimited users and keywords at enterprise scale.
                        </p>

                        <AnimatePresence>
                            {expanded && (
                                <motion.figure
                                    key="image"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="overflow-hidden hidden md:block mt-4"
                                >
                                    <Image
                                        src="/woman-with-laptop2.png"
                                        alt="Woman with laptop"
                                        width={300}
                                        height={200}
                                        className="rounded-lg object-contain w-full h-auto"
                                    />
                                </motion.figure>
                            )}
                        </AnimatePresence>
                    </div>
                );

            case "text-only":
                return (
                    <div className="flex flex-col justify-center mt-4 sm:mt-6 max-w-md text-center md:text-left">
                        {formattedTitle}
                        <p className="text-gray-600 text-sm sm:text-base">
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
            onClick={toggleExpanded} // Click based logic

            // 💡 Uncomment these lines below to switch back to hover-based logic:
            // onMouseEnter={() => setExpanded(true)}
            // onMouseLeave={() => setExpanded(false)}

            className={`${baseClass} ${expandedBasis} w-full`}
            transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
        >
            {/* Index */}
            <p className="absolute top-3 sm:top-4 left-3 sm:left-4 font-semibold text-sm sm:text-base text-muted-foreground">
                {index.toString().padStart(2, "0")}
            </p>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center md:items-start justify-center w-full h-full">
                {renderVariantContent()}
            </div>
        </motion.article>
    );
}
