"use client";
import { renderHighlightedText } from "@/lib/helpers";
import { CardType } from "@/types/info";
import { AnimatePresence, motion } from "motion/react";
import { useLocale } from "next-intl";

type ExpandingCardProps = CardType & {
    isExpanded: boolean;
    onClick: () => void;
};

function ExpandingCard({ title, description, highlighted, isExpanded, onClick }: ExpandingCardProps) {
    const variants = {
        hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
    const locale = useLocale();
    const isRTL = locale === "ar";

    return (
        <div
            onClick={onClick}
            className={`bg-linear-to-b from-primary to-[#8A38F5] p-1 transition-all duration-500 rounded-3xl cursor-pointer min-h-52
      ${isExpanded ? "basis-2/3" : "basis-1/3"}
      `}
        >
            <div className="bg-white transition-colors duration-300 px-6 py-3 rounded-[20px] h-full w-full flex flex-col justify-center min-h-52 lg:min-h-0">
                {/* For desktop */}
                <motion.h3
                    layout
                    animate={{ textAlign: isExpanded ? isRTL ? "right" : "left" : "center" }}
                    className={`hidden md:block text-2xl font-semibold mb-2 ${isExpanded && "text-primary"
                        } transition-colors duration-300`}
                >
                    {title}
                </motion.h3>

                {/* For mobile */}
                <motion.h3
                    layout="size"
                    animate={{ textAlign: isExpanded ? "left" : "center" }}
                    className={`md:hidden text-2xl font-semibold mb-2 ${isExpanded && "text-primary"
                        } transition-colors duration-300`}
                >
                    {title}
                </motion.h3>

                <AnimatePresence mode="popLayout">
                    {isExpanded && (
                        <motion.p
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            className="mt-2"
                        >
                            {renderHighlightedText(description, highlighted)}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default ExpandingCard;
