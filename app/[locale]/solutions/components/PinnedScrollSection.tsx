"use client";

import { Scrollama, Step } from "react-scrollama";
import { useRef, useState } from "react";
import Image from "next/image";
import { scrollingCards } from "@/data/constants/info";

export default function PinnedScrollSection() {
    const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleStepEnter = ({ data }: { data: number }) => {
        setCurrentStepIndex(data);
    };

    const scrollToStep = (index: number) => {
        const target = stepRefs.current[index];
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    };

    return (
        <div className="relative flex justify-center items-start">
            {/* Sticky image container */}
            <div className="sticky top-0 h-screen w-1/2 flex justify-center items-center">
                <figure className="px-4 py-32 rounded-4xl bg-[linear-gradient(-125deg,#95DDEE_0%,#11A8CF_32%,#95DDEE_46%,#11A8CF_100%)]">
                    {currentStepIndex === 0 && (
                        <Image src="https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/Solutions%2FPinnedSectionScroll%2Fscroll-image-1.svg?alt=media&token=1a25ed39-39f9-4481-9b2a-8b11808952e4" width={540} height={340} alt="Step 1" priority />
                    )}
                    {currentStepIndex === 1 && (
                        <Image src="https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/Solutions%2FPinnedSectionScroll%2Fscroll-image-1.svg?alt=media&token=1a25ed39-39f9-4481-9b2a-8b11808952e4" width={540} height={340} alt="Step 2" priority />
                    )}
                    {currentStepIndex === 2 && (
                        <Image src="https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/Solutions%2FPinnedSectionScroll%2Fscroll-image-1.svg?alt=media&token=1a25ed39-39f9-4481-9b2a-8b11808952e4" width={540} height={340} alt="Step 3" priority />
                    )}
                    {currentStepIndex === 3 && (
                        <Image src="https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/Solutions%2FPinnedSectionScroll%2Fscroll-image-1.svg?alt=media&token=1a25ed39-39f9-4481-9b2a-8b11808952e4" width={540} height={340} alt="Step 4" priority />
                    )}
                    {currentStepIndex === 4 && (
                        <Image src="https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/Solutions%2FPinnedSectionScroll%2Fscroll-image-1.svg?alt=media&token=1a25ed39-39f9-4481-9b2a-8b11808952e4" width={540} height={340} alt="Step 5" priority />
                    )}
                </figure>
            </div>

            {/* Scroll text section */}
            <div className="w-1/2 px-4">
                <Scrollama onStepEnter={handleStepEnter} offset={0.6}>
                    {scrollingCards.map((card, i) => (
                        <Step data={i} key={card.title}>
                            <div
                                ref={(element) => { stepRefs.current[i] = element }}
                                className="py-8 my-[43vh]"
                            >
                                <h2 className="text-4xl">{card.title}</h2>
                                <p className="text-2xl font-light mt-4">{card.description}</p>
                            </div>
                        </Step>
                    ))}
                </Scrollama>
            </div>

            {/* Indices */}
            <div className="sticky top-0 h-screen flex flex-col justify-center items-center gap-8 pl-10">
                {scrollingCards.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToStep(index)}
                        className={`transition-all duration-300 ${index === currentStepIndex ? "font-bold scale-110" : "font-light"
                            }`}
                    >
                        {(index + 1).toString().padStart(2, "0")}
                    </button>
                ))}
            </div>
        </div>
    );
}
