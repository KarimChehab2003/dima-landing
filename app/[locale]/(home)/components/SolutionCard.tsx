import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { SolutionLink } from "@/types/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";

function SolutionCard({ logo, title, subTitle, href }: SolutionLink) {
  const locale = useLocale();
  const t = useTranslations("Home.dimaSuite");
  const isRTL = locale === "ar";

  return (
    <article className={`flex flex-col justify-between h-full items-start gap-3 shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-3xl p-8 ${isRTL ? "items-end text-right" : "items-start text-left"}`}>
      <div className={`flex flex-col gap-3 w-full ${isRTL ? "items-end" : "items-start"}`}>
        <figure className="relative min-w-16 min-h-16">
          <Image src={logo} alt={title} fill className="object-contain" />
        </figure>
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
      {href === "/solutions/influencer-marketing" ||
        href === "/solutions/customer-experience" ? (
        <p className={`text-primary ${isRTL ? "self-end" : "self-start"}`}>{t("comingSoon")}</p>
      ) : (
        <Link href={href} className={isRTL ? "self-end" : "self-start"}>
          <Button variant="outline">{t("explore")}</Button>
        </Link>
      )}
    </article>
  );
}

export default SolutionCard;
