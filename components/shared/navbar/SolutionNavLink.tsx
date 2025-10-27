import Image from "next/image";
import { SolutionLink } from "@/types/link";
import Link from "next/link";

function SolutionNavLink({ logo, title, subTitle, href }: SolutionLink) {
    return (
        <Link href={href}>
            <article className="flex items-center py-2 gap-2">
                <figure className="min-w-18 min-h-18 relative">
                    <Image
                        src={logo}
                        alt={title + " link"}
                        fill
                        className="object-contain" />
                </figure>
                <div className="space-y-1">
                    <p className="font-semibold hover:underline">{title}</p>
                    <p className="text-muted-foreground text-xs">{subTitle}</p>
                </div>
            </article>
        </Link>

    );
}

export default SolutionNavLink;