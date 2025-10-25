import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { SolutionLink } from "@/types/link";
import Image from "next/image";

function SolutionCard({ logo, title, subTitle, href }: SolutionLink) {
    return (
        <article className="flex flex-col justify-start items-start gap-3">
            <figure className="relative w-16 h-16">
                <Image
                    src={logo}
                    alt={title}
                    fill
                    className="object-contain"
                />
            </figure>
            <h3 className="text-lg font-medium">{title}</h3>
            <p>{subTitle}</p>
            <Link href={href}>
                <Button variant="outline">Explore</Button>
            </Link>

        </article>
    );
}

export default SolutionCard;