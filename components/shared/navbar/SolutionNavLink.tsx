import Image from "next/image";
import Link from "next/link";
import { SolutionLink } from "@/types/link";
import { useTranslations } from "next-intl";

function SolutionNavLink({ logo, href, translationKey, isRTL }: SolutionLink & { isRTL?: boolean }) {
    const t = useTranslations("Navbar.solutions.links")
    return (
        <Link href={href}>
            <article
                className={`flex items-center py-2 gap-4 transition-colors hover:text-primary ${isRTL ? "lg:flex-row-reverse" : "flex-row"
                    }`}
            >
                <figure className="flex justify-center items-center h-[45px] sm:h-[55px] lg:h-[65px] w-auto shrink-0">
                    <Image
                        src={logo}
                        alt={`${translationKey} logo`}
                        width={80}
                        height={60}
                        className="object-contain max-h-[45px] sm:max-h-[55px] lg:max-h-[65px]"
                    />
                </figure>

                <div className="space-y-1">
                    <p className="font-semibold hover:underline">{t(`${translationKey}.title`)}</p>
                    <p className="text-muted-foreground text-xs">{t(`${translationKey}.description`)}</p>
                </div>
            </article>
        </Link>
    );
}

export default SolutionNavLink;
