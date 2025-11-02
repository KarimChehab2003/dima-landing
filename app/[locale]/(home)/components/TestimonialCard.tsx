import { TestimonialType } from "@/types/info";
import { useLocale } from "next-intl";
import Image from "next/image";

function TestimonialCard({ quote, name, jobRole, companyLogo }: TestimonialType) {
    const locale = useLocale();
    const isRTL = locale === 'ar';

    return (
        <article className="w-[300px] h-[350px] relative flex flex-col p-6 bg-white rounded-xl shadow-md -mx-4 my-8">
            <div className={`flex gap-4 items-start ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                <figure className="relative w-6 h-6 shrink-0">
                    <Image
                        src="/open-quote.svg"
                        alt="open quotes"
                        fill
                        className={`object-contain ${isRTL ? 'rotate-180' : ''}`}
                    />
                </figure>
                <p className="text-sm leading-relaxed"><bdi>{quote}</bdi></p>
            </div>

            <div className={`mt-auto pt-6 flex justify-between items-center ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                <div>
                    <h3 className="font-medium text-base">{name}</h3>
                    <p className="text-muted-foreground text-sm"><bdi>{jobRole}</bdi></p>
                </div>
                <figure>
                    <Image
                        src={companyLogo}
                        alt={name}
                        width={100}
                        height={50}
                        className="object-contain mt-4"
                    />
                </figure>
            </div>
        </article>
    );
}

export default TestimonialCard;
