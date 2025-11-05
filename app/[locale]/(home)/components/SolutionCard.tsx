import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { SolutionLink } from "@/types/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";

function SolutionCard({ logo, href, translationKey }: SolutionLink) {
  const locale = useLocale();
  const t = useTranslations("Home.dimaSuite");
  const isRTL = locale === "ar";

  return (
    <article className={`flex flex-col justify-between h-full items-start gap-3 shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-3xl p-8 ${isRTL ? "items-end text-right" : "items-start text-left"}`}
      dir="ltr">
      <div className={`flex flex-col gap-3 w-full ${isRTL ? "items-end" : "items-start"}`}>
        {/* Logo */}
        <figure className="relative min-w-16 min-h-16">
          <Image src={logo} alt={translationKey} fill className="object-contain max-h-16" />
        </figure>

        {/* Heading */}
        <h3 className="text-2xl">{t(`solutions.${translationKey}.title`)}</h3>
        <p className="text-sm">{t(`solutions.${translationKey}.description`)}</p>
      </div>

      {/* Explore/Coming soon button */}
      {href === "/solutions/influencer-marketing" ||
        href === "/solutions/customer-experience" ? (
        <p className={`text-primary ${isRTL ? "self-end" : "self-start"}`}>{t("comingSoon")}</p>
      ) : (
        <Link href={href} className={isRTL ? "self-end" : "self-start"}>
          <Button variant="outline" className="px-4! font-normal">{t("explore")}</Button>
        </Link>
      )}
    </article>
  );
}

export default SolutionCard;
