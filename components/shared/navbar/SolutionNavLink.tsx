import Image from "next/image";
import Link from "next/link";
import { SolutionLink } from "@/types/link";
import { useTranslations } from "next-intl";

function SolutionNavLink({ logo, href, translationKey, isRTL }: SolutionLink & { isRTL?: boolean }) {
    const t = useTranslations("Navbar.solutions.links");

    const isDisabled =
        href === "/solutions/influencer-marketing" ||
        href === "/solutions/customer-experience";

    const content = (
        <article className={`flex items-center py-2 gap-4 ${isRTL ? "lg:flex-row-reverse" : "flex-row"} ${isDisabled && "opacity-60 cursor-not-allowed"}`}>
            <figure className="flex justify-start lg:justify-center items-center w-16 lg:w-auto shrink-0">
                <Image
                    src={logo}
                    alt={`${translationKey} logo`}
                    width={80}
                    height={60}
                    className="object-contain max-h-[45px] lg:min-h-[65px] lg:max-h-[65px] w-auto lg:max-w-20"
                />
            </figure>

            <div className="space-y-1">
                <p className={`font-semibold ${!isDisabled && "hover:underline hover:text-primary"}`}>{t(`${translationKey}.title`)}</p>
                <p className="text-muted-foreground text-xs">{t(`${translationKey}.description`)}</p>
                {isDisabled && (
                    <p className="text-primary text-xs">
                        {t(`${translationKey}.comingSoon`)}
                    </p>
                )}
            </div>
        </article>
    );

    // Render without link if disabled
    return isDisabled ? content : <Link href={href}>{content}</Link>;
}

export default SolutionNavLink;
