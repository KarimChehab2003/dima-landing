import { EnterpriseType } from "@/types/info";
import { useLocale } from "next-intl";
import Image from "next/image";

function EntrepriseCard({ icon, title, description }: EnterpriseType) {
    const locale = useLocale();
    const isRTL = locale === "ar";
    return (
        <article className="flex flex-col justify-center items-center bg-[#95DDEE]/50 p-8 rounded-xl h-full min-h-80">
            <div className="flex-1 flex flex-col gap-8" >
                {/* Icon */}
                <div className={`flex lg:flex-col items-center ${isRTL ? "md:items-end" : "md:items-start"} gap-4`}>
                    <figure className="relative w-8 h-8 min-w-8 min-h-8 bg-[#2B558C] rounded-full">
                        <Image
                            src={icon}
                            alt="icon"
                            fill
                            className="object-contain p-1"
                        />
                    </figure>

                    {/* Title */}
                    <h3 className="text-lg font-bold">{title}</h3>
                </div>

                {/* Description */}
                <p className="text-lg">{description}</p>
            </div>
        </article>
    );
}

export default EntrepriseCard;