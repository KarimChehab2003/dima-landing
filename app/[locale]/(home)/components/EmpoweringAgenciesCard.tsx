"use client";

import { EmpoweringAgenciesInfo } from "@/types/info";
import RadialGradientProgress from "./RadialGradientProgress";


export default function EmpoweringAgenciesCard({
    value,
    title,
    description,
    suffix,
    maxValue
}: EmpoweringAgenciesInfo) {
    return (
        <article className="max-w-sm min-h-[300px] rounded-4xl shadow-md shadow-primary flex flex-col items-center gap-4 p-4 bg-muted"
        >
            {/* Top section with progress and title */}
            <div className="flex items-center gap-4 bg-muted-foreground/7 rounded-xl px-5 py-4">
                <RadialGradientProgress progress={value} size={120} strokeWidth={20} suffix={suffix} maxValue={maxValue} />
                <h3 className="text-xl font-semibold capitalize tracking-wide">
                    {title}
                </h3>
            </div>

            {/* Description */}
            <p className="text-lg text-center leading-relaxed px-2 md:px-4">
                {description}
            </p>
        </article>
    );
}
