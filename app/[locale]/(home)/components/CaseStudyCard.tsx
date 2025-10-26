import { CaseStudyInfo } from "@/types/info";
import Image from "next/image";

function CaseStudyCard({ image, companyName, description }: CaseStudyInfo) {
    return (
        <article className="flex flex-col justify-between items-center rounded-xl bg-white p-2">
            <figure className="relative w-full h-[330px]">
                <Image
                    src={image}
                    fill
                    className="object-contain"
                    alt={companyName}
                />
            </figure>
            <div className="p-6 space-y-3">
                <h3 className="text-2xl font-medium">{companyName}</h3>
                <p className="text-muted-foreground">{description}</p>
            </div>
        </article>
    );
}

export default CaseStudyCard;