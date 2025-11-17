"use client";

import { Scrollama, Step } from "react-scrollama";
import { useRef, useState } from "react";
import Image from "next/image";
import { CardType } from "@/types/info";
import RequestDemoButton from "@/components/shared/RequestDemoButton";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PinnedScrollSection({ cards, slug }: { cards: CardType[], slug: string }) {
    const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
    const t = useTranslations(`Solutions.${slug}.scrollingSection`);

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
            <div className="sticky top-0 h-screen w-1/2 flex flex-col justify-center items-center">
                <figure className="px-4 py-16 rounded-4xl bg-[linear-gradient(-125deg,#95DDEE_0%,#11A8CF_32%,#95DDEE_46%,#11A8CF_100%)]">
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

                {/* CTA */}
                <div className="text-xl text-center font-semibold bg-black rounded-2xl px-6 py-4 mt-8 hidden w-full lg:flex flex-col md:flex-row justify-center items-center gap-2 max-w-[572px]">
                    <h3 className="text-white">{t("cta")}</h3>
                    <Button className="hidden lg:flex" dir="ltr">
                        <Link href="/request-demo" className="text-[15px]">{t("requestDemo")}</Link>
                        <div className="w-6 h-6 rounded-full bg-white flex justify-center items-center">
                            <ArrowRight color="black" />
                        </div>
                    </Button>
                </div>
            </div>

            {/* Scroll text section */}
            <div className="w-1/2 px-4">
                <Scrollama onStepEnter={handleStepEnter} offset={0.6}>
                    {cards.map((card, i) => (
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
                {cards.map((_, index) => (
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
