"use client";
import { motion, useMotionValue, animate } from "motion/react";
import React, { useEffect, useState } from "react";

type RadialGradientProgressProps = {
    size?: number;
    strokeWidth?: number;
    progress?: number;
    innerColor?: string;
    outerColor?: string;
    trackColor?: string;
    textColor?: string;
    duration?: number;
    suffix?: string;
    maxValue?: number;
};

const formatNumber = (num: number, suffix?: string | React.ReactNode) => {
    if (suffix === "M") {
        return `${(num / 1_000_000).toFixed(0)}M`; // e.g., 50M
    }
    if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
    if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
    return Math.round(num).toString() + "%";
};

const RadialGradientProgress: React.FC<RadialGradientProgressProps> = ({
    size = 120,
    strokeWidth = 20,
    progress = 75,
    innerColor = "#95DDEE",
    outerColor = "#11A8CF",
    trackColor = "#e5e7eb",
    textColor = "#1f2937",
    duration = 1.5,
    suffix = "%",
    maxValue = 100,
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const offset = useMotionValue(circumference);
    const number = useMotionValue(0);
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const targetOffset = circumference - (progress / maxValue) * circumference;

        const offsetAnimation = animate(offset, targetOffset, {
            duration,
            ease: "easeInOut",
        });

        const numberAnimation = animate(number, progress, {
            duration,
            ease: "easeInOut",
            onUpdate: (latest) => setDisplayValue(latest),
        });

        return () => {
            offsetAnimation.stop();
            numberAnimation.stop();
        };
    }, [progress, circumference, duration, offset, number, maxValue]);

    return (
        <div
            className="relative flex items-center justify-center"
            style={{ width: size, height: size }}
        >
            <svg width={size} height={size} className="-rotate-90">
                <defs>
                    <radialGradient id="radialGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="80%" stopColor={outerColor} />
                        <stop offset="100%" stopColor={innerColor} />
                    </radialGradient>
                </defs>

                {/* Track */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={trackColor}
                    strokeWidth={strokeWidth}
                    fill="none"
                />

                {/* Animated Progress */}
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="url(#radialGradient)"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                />
            </svg>

            {/* Animated Text */}
            <motion.span
                className="absolute font-bold text-xl inline-flex items-center gap-1"
                style={{ color: textColor }}
            >
                {formatNumber(displayValue, suffix)}
            </motion.span>
        </div>
    );
};

export default RadialGradientProgress;
