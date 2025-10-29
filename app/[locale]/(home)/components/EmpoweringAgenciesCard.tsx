"use client";

import { EmpoweringAgenciesInfo } from "@/types/info";
import RadialGradientProgress from "./RadialGradientProgress";

export default function EmpoweringAgenciesCard({
    value,
    title,
    description,
    suffix,
    maxValue,
}: EmpoweringAgenciesInfo) {
    return (
        <article className="w-full max-w-sm mx-auto h-full rounded-3xl shadow-md shadow-primary flex flex-col items-center gap-4 p-4 sm:p-6 bg-muted transition-transform duration-300 hover:scale-[1.02]">
            {/* Top section */}
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-muted-foreground/10 rounded-xl px-4 sm:px-5 py-4 w-full">
                <div className="flex justify-center sm:justify-start">
                    <RadialGradientProgress
                        progress={value}
                        size={100}
                        strokeWidth={16}
                        suffix={suffix}
                        maxValue={maxValue}
                    />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold capitalize tracking-wide text-center sm:text-left">
                    {title}
                </h3>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-center leading-relaxed px-2 sm:px-4">
                {description}
            </p>
        </article>
    );
}
