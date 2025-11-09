"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, easeOut, useInView } from "motion/react";

type CounterPercentageProps = {
    number: number;
    text: string;
};

function CounterPercentage({ number, text }: CounterPercentageProps) {
    const count = useMotionValue(0);
    const rounded = useTransform(() => Math.round(count.get()));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, number, { duration: 3, ease: easeOut });
            return () => controls.stop();
        }
    }, [isInView, number]);

    return (
        <div ref={ref} className="flex flex-col items-center gap-4">
            <span className="text-4xl lg:text-5xl font-bold text-primary">
                <motion.span className="text-black">{rounded}</motion.span>%
            </span>
            <p className="text-3xl lg:text-4xl font-medium text-center">{text}</p>
        </div>
    );
}

export default CounterPercentage;
