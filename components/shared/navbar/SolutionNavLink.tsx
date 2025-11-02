import Image from "next/image";
import { SolutionLink } from "@/types/link";
import Link from "next/link";
import { useTranslations } from "next-intl";

function SolutionNavLink({ logo, title, subTitle, titleKey, subTitleKey, href, isRTL }: SolutionLink & { isRTL?: boolean }) {
    const t = useTranslations("Navbar");
    const resolvedTitle = titleKey ? t(titleKey) : title;
    const resolvedSubTitle = subTitleKey ? t(subTitleKey) : subTitle;
    return (
        <Link href={href}>
            <article className={`flex items-center py-2 gap-4 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                <figure className="min-w-18 min-h-18 relative">
                    <Image
                        src={logo}
                        alt={(resolvedTitle || title) + " link"}
                        fill
                        className="object-contain" />
                </figure>
                <div className="space-y-1">
                    <p className="font-semibold hover:underline">{resolvedTitle}</p>
                    <p className="text-muted-foreground text-xs">{resolvedSubTitle}</p>
                </div>
            </article>
        </Link>

    );
}

export default SolutionNavLink;