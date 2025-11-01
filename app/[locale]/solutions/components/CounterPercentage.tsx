"use client";
import { useMotionValue, motion, animate, easeOut, useTransform } from "motion/react";
import { useEffect } from "react";

type CounterPercentageProps = {
    number: number;
    text: string;
}

function CounterPercentage({ number, text }: CounterPercentageProps) {
    const count = useMotionValue(0);
    const rounded = useTransform(() => Math.round(count.get()));
    useEffect(() => {
        const controls = animate(count, number, { duration: 1, ease: easeOut });
        return () => controls.stop();
    }, [number])
    return (
        <div className="flex flex-col items-center gap-4">
            <span className="text-4xl font-bold text-primary">
                <motion.span className="text-black">{rounded}</motion.span>%
            </span>
            <p className="text-2xl font-medium">{text}</p>
        </div>
    );
}

export default CounterPercentage;