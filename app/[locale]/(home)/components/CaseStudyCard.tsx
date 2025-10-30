import { CaseStudyInfo } from "@/types/info";
import Image from "next/image";

function CaseStudyCard({ image, companyName, description }: CaseStudyInfo) {
    return (
        <article className="flex flex-col justify-between items-center rounded-xl bg-white shadow-md transition-transform hover:scale-[1.02] duration-300 p-3 sm:p-4 md:p-6">
            <figure className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[330px]">
                <Image
                    src={image}
                    fill
                    className="object-contain"
                    alt={companyName}
                    priority
                />
            </figure>

            <div className="p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 ">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{companyName}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
            </div>
        </article>
    );
}

export default CaseStudyCard;
