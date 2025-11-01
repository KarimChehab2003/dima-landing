"use client";
import { renderHighlightedText } from "@/lib/helpers";
import { CardType } from "@/types/info";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function ExpandingCard({ title, description, highighted }: CardType) {
    const [isHovered, setIsHovered] = useState(false);

    const variants = {
        hidden: { opacity: 0, y: 20, transition: { duration: 0.3 } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    };

    return (
        <div
            className="bg-linear-to-b from-primary to-[#8A38F5] p-1 basis-1/3 hover:basis-2/3 transition-all duration-500 rounded-3xl cursor-pointer min-h-48 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="bg-white transition-colors duration-300 px-6 py-3 rounded-[20px] h-full flex flex-col justify-center">
                <motion.h3
                    layout
                    animate={{ textAlign: isHovered ? "left" : "center" }}
                    className={`text-2xl font-semibold mb-2 ${isHovered && "text-primary"} transition-colors duration-300`}
                >
                    {title}
                </motion.h3>

                <AnimatePresence mode="popLayout" >
                    {isHovered && (
                        <motion.p
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="mt-2"
                        >
                            {renderHighlightedText(description, highighted)}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </div >
    );
}

export default ExpandingCard;
