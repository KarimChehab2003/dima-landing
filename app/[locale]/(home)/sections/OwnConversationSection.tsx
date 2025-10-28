"use client";
import { ownConversationInfo } from "@/data/constants/info";
import SectionWrapper from "../components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import { ConversationInfo } from "@/types/info";
import { FaDisplay } from "react-icons/fa6";
import { Link } from "@/i18n/navigation";
import { motion, AnimatePresence, easeOut, easeIn } from "motion/react";

// Animation variants
const textVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: easeOut } },
    exit: { opacity: 0, x: -40, transition: { duration: 0.2, ease: easeIn } },
};

const imageVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: easeOut } },
    exit: { opacity: 0, x: 40, transition: { duration: 0.3, ease: easeIn } },
};

function OwnConversationSection() {
    const [activeFeature, setActiveFeature] = useState<ConversationInfo>(ownConversationInfo[4]);

    return (
        <SectionWrapper className="justify-center items-center px-6 sm:px-10 lg:px-20 py-12">
            <div className="flex flex-col items-center gap-8 w-full">
                {/* Header */}
                <div className="space-y-3 text-center max-w-3xl">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold my-4">
                        Own Every Conversation
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                        Discover how our suite of AI powered solutions help you see, understand, and act with precision.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 w-full max-w-4xl">
                    {ownConversationInfo.map((info) => (
                        <Button
                            key={info.title}
                            variant={activeFeature?.title === info.title ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setActiveFeature(info)}
                            className="flex items-center gap-2 text-sm sm:text-base px-3 sm:px-4 md:px-6"
                        >
                            <info.icon size={16} className="sm:size-5" />
                            <span>{info.title}</span>
                        </Button>
                    ))}
                </div>

                {/* Image + Text */}
                <div
                    className=" flex flex-col-reverse md:flex-row items-center justify-center w-full relative bg-gradient-to-b from-blue-500 to-purple-600 md:bg-contain md:bg-center md:bg-no-repeat gap-12 md:gap-20 lg:gap-28 mt-6"
                    style={{
                        backgroundImage: "url('/bg-vector.png')",
                    }}
                >
                    {/* Left side - Image */}
                    <figure className="relative w-full md:w-2/3 max-w-[900px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] shrink-0 z-20">
                        <Image
                            src={activeFeature?.image}
                            alt={activeFeature?.title}
                            fill
                            className="object-contain py-8"
                            priority
                        />
                    </figure>

                    {/* Right side - Info & Button Stack */}
                    <div className="flex flex-col h-full w-full md:max-w-sm px-4 sm:px-6">
                        {/* Info Box */}
                        <div className="bg-white w-full flex-1 flex flex-col justify-center items-start rounded-xl shadow-sm p-6 sm:p-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeFeature.title}
                                    variants={textVariants}
                                    exit="exit"
                                    initial="hidden"
                                    animate="visible"
                                    className="w-full"
                                >
                                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                                        {activeFeature.title}
                                    </h3>
                                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                                        {activeFeature.subTitle}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Button */}
                        <div className="w-full flex justify-start sm:justify-center py-6">
                            <Link href="/request-demo">
                                <Button size="lg" className="flex items-center gap-2 text-sm sm:text-base">
                                    <FaDisplay className="size-4 sm:size-5" />
                                    <span>Request a demo</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}

export default OwnConversationSection;
