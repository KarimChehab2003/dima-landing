import { SideInfoType } from "@/types/info";
import Image from "next/image";

function SideInfo({ icon, title, description }: SideInfoType) {
    return (
        <article className="flex gap-4 py-4">
            <figure className="relative w-10 h-10">
                <Image
                    src={icon}
                    alt="challenge icon"
                    fill
                    className="object-contain"
                />
            </figure>
            <div className="flex-1">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p>{description}</p>
            </div>
        </article>
    );
}

export default SideInfo;