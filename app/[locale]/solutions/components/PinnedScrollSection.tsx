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
                        <Image src="/scroll-image-1.svg" width={540} height={340} alt="Step 1" priority />
                    )}
                    {currentStepIndex === 1 && (
                        <Image src="/scroll-image-2.svg" width={540} height={340} alt="Step 2" />
                    )}
                    {currentStepIndex === 2 && (
                        <Image src="/scroll-image-3.svg" width={540} height={340} alt="Step 3" />
                    )}
                    {currentStepIndex === 3 && (
                        <Image src="/scroll-image-3.svg" width={540} height={340} alt="Step 4" />
                    )}
                    {currentStepIndex === 4 && (
                        <Image src="/scroll-image-3.svg" width={540} height={340} alt="Step 5" />
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
