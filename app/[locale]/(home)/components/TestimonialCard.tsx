import { TestimonialType } from "@/types/info";
import Image from "next/image";

function TestimonialCard({ quote, name, jobRole, companyLogo }: TestimonialType) {
    return (
        <article className="w-[300px] relative flex flex-col p-6 bg-white rounded-xl shadow-md -mx-4 my-8 gap-8">
            <div className="flex gap-4 items-start">
                <figure className="relative w-6 h-6 shrink-0">
                    <Image
                        src="/openQuote.png"
                        alt="open quotes"
                        fill
                        className="object-contain"
                    />
                </figure>
                <p className="text-sm leading-relaxed">{quote}</p>
            </div>

            <div className="mt-4 flex justify-between items-center">
                <div>
                    <h3 className="font-medium text-base">{name}</h3>
                    <p className="text-muted-foreground text-sm">{jobRole}</p>
                </div>
                <figure className="relative w-16 h-12 shrink-0">
                    <Image
                        fill
                        src={companyLogo}
                        alt={name + " company logo"}
                        className="object-contain"
                    />
                </figure>
            </div>
        </article>
    );
}

export default TestimonialCard;
