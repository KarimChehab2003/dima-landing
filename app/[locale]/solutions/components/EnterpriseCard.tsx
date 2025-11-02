import { EnterpriseType } from "@/types/info";
import Image from "next/image";

function EntrepriseCard({ icon, title, description }: EnterpriseType) {
    return (
        <article className="flex flex-col justify-center items-center bg-[#95DDEE]/50 p-8 rounded-xl min-h-[332px]">
            <div className="flex-1 flex items-baseline flex-col gap-8">
                {/* Icon */}
                <figure className="relative w-12 h-12 bg-[#2B558C] rounded-full">
                    <Image
                        src={icon}
                        alt="icon"
                        fill
                        className="object-contain p-1"
                    />
                </figure>

                {/* Title */}
                <h3 className="text-xl font-bold">{title}</h3>

                {/* Description */}
                <p>{description}</p>
            </div>
        </article>
    );
}

export default EntrepriseCard;