"use client";
import useDropdownHoverDelay from "@/hooks/useDropdownHoverDelay";
import SolutionNavLink from "./SolutionNavLink";
import { solutionLinks } from "@/data/constants/links";
import { ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

function SolutionsDropdown() {
    const { isOpen, handleMouseEnter, handleMouseLeave, closeDropdown } = useDropdownHoverDelay();

    return (
        <div className="hidden lg:block">
            {/* Trigger */}
            <div
                className="inline-flex items-center relative z-20"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span>Solutions</span>
                <ChevronUp size={14} className={`${isOpen ? "rotate-0" : "rotate-180"} transition-transform duration-300 mx-1`} />

                {/* Menu Content */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="bg-white fixed top-[56px] lg:top-[68px] left-0 p-8 w-full border-t shadow-xl"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            initial={{
                                translateY: 5,
                                opacity: 0
                            }}
                            animate={{
                                translateY: 0,
                                opacity: 1,
                                transition: { duration: 0.2, ease: "easeOut" }
                            }}
                            exit={{
                                translateY: 5,
                                opacity: 0
                            }}
                        >
                            <ul className="max-w-4xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                {solutionLinks.map((link) => (
                                    <li key={link.title} onClick={closeDropdown}>
                                        <SolutionNavLink {...link} />
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default SolutionsDropdown;