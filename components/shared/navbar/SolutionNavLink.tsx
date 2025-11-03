import Image from "next/image";
import Link from "next/link";
import { SolutionLink } from "@/types/link";

function SolutionNavLink({ logo, title, description, href, isRTL }: SolutionLink & { isRTL?: boolean }) {
    console.log(title, description, isRTL);
    return (
        <Link href={href}>
            <article
                className={`flex items-center py-2 gap-4 transition-colors hover:text-primary ${isRTL ? "text-right" : "text-left"
                    }`}
            >
                <figure className="relative min-w-18 min-h-18 shrink-0">
                    <Image
                        src={logo}
                        alt={`${title} link`}
                        fill
                        className="object-contain"
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
