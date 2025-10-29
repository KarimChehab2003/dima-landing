import { TestimonialType } from "@/types/info";
import Image from "next/image";

function TestimonialCard({ quote, name, jobRole }: TestimonialType) {
    return (
        <article className="w-[300px] h-[350px] relative flex flex-col p-6 bg-white rounded-xl shadow-md -mx-4 my-8">
            <div className="flex gap-4 items-start">
                <figure className="relative w-6 h-6 shrink-0">
                    <Image
                        src="/openQuote.png"
                        alt="open quotes"
                        fill
                        className="object-contain"
                    />
                </figure>
                <p className="text-sm leading-relaxed"><bdi>{quote}</bdi></p>
            </div>

            <div className="mt-auto pt-6">
                <h3 className="font-medium text-base">{name}</h3>
                <p className="text-muted-foreground text-sm"><bdi>{jobRole}</bdi></p>
            </div>
        </article>
    );
}

export default TestimonialCard;
