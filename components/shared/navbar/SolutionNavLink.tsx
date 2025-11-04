import Image from "next/image";
import Link from "next/link";
import { SolutionLink } from "@/types/link";

function SolutionNavLink({ logo, title, description, href, isRTL }: SolutionLink & { isRTL?: boolean }) {
    console.log(title, description, isRTL);
    return (
        <Link href={href}>
            <article
                className={`flex items-center py-2 gap-4 transition-colors hover:text-primary ${isRTL ? "flex-row-reverse" : "flex-row"
                    }`}
            >
                <figure className="flex justify-center items-center h-[65px] w-auto shrink-0">
                    <Image
                        src={logo}
                        alt={`${title} logo`}
                        width={80}
                        height={60}
                        className="object-contain max-h-[65px]"
                    />
                </figure>


                <div className="space-y-1">
                    <p className="font-semibold hover:underline">{title}</p>
                    <p className="text-muted-foreground text-xs">{description}</p>
                </div>
            </article>
        </Link>
    );
}

export default SolutionNavLink;
