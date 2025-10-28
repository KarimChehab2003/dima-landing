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
    exit: { opacity: 0, x: -40, transition: { duration: 0.2, ease: easeIn } }
};

const imageVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: easeOut } },
    exit: { opacity: 0, x: 40, transition: { duration: 0.3, ease: easeIn } },
};

function OwnConversationSection() {
    const [activeFeature, setActiveFeature] = useState<ConversationInfo>(ownConversationInfo[4]);

    // TODO: Continue working on animation for this section

    return (
        <SectionWrapper className="justify-center items-center px-20">
            <div className="flex flex-col items-center gap-8 w-full">
                {/* Header */}
                <div className="space-y-2 text-center">
                    <h2 className="text-4xl sm:text-5xl my-4">Own Every Conversation</h2>
                    <p className="text-xl text-muted-foreground">Discover how our suite of AI powered solutions help you see, understand, and act with precision.</p>
                </div>

                {/* Buttons */}
                <div className="inline-flex justify-center items-center gap-4">
                    {
                        ownConversationInfo.map((info) => (
                            <Button
                                key={info.title}
                                variant={activeFeature?.title === info.title ? "default" : "ghost"}
                                size="sm"
                                onClick={() => setActiveFeature(info)}
                                className="flex items-center gap-2"
                            >
                                <info.icon size={18} />
                                <span>{info.title}</span>
                            </Button>
                        ))
                    }
                </div>

                {/* Image + Text */}
                <div
                    className="flex flex-col md:flex-row items-center justify-center w-full relative h-[600px] bg-contain bg-center bg-no-repeat gap-28"
                    style={{
                        backgroundImage: "url('/bg-vector.png')",
                    }}
                >
                    {/* Left side - Image */}
                    <figure className="relative w-full md:w-2/3 max-w-[900px] h-[600px] shrink-0 z-20">
                        <Image
                            src={activeFeature?.image}
                            alt={activeFeature?.title}
                            fill
                            className="object-contain  py-8"
                            priority
                        />
                    </figure>

                    {/* Right side - Info & Button Stack */}
                    <div className="flex flex-col h-full max-w-sm xl:me-4 me-4">
                        {/* Info Box */}
                        <div className="bg-white max-w-lg flex-1 flex flex-col justify-center items-start rounded-l-4xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeFeature.title}

                                    variants={textVariants}
                                    exit="exit"
                                    initial="hidden"
                                    animate="visible"
                                    className="w-full"
                                >
                                    <h3 className="text-3xl font-bold text-foreground my-8">{activeFeature.title}</h3>
                                    <p className="text-medium leading-relaxed text-lg">
                                        {activeFeature.subTitle}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Button in transparent div */}
                        <div className="w-full h-full flex flex-1 py-8 ">
                            <Link href="/request-demo">
                                <Button size="2xl" className="flex items-center gap-2">
                                    <FaDisplay className="size-5" />
                                    <span>Request a demo</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>



            </div>
        </SectionWrapper >
    );
}

export default OwnConversationSection;