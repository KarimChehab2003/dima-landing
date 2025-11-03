import Image from "next/image";
import FooterLinks from "./FooterLinks";
import SocialMediaLinks from "./SocialMediaLinks";
import LanguageSwitcher from "../LanguageSwitcher";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import RequestDemoButton from "@/app/[locale]/(home)/components/RequestDemoButton";
import { NavLink, SolutionLink } from "@/types/link";

function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const solutions = t.raw("solutions.links") as (NavLink | SolutionLink)[];
  const resources = t.raw("resources.links") as (NavLink | SolutionLink)[];

  return (
    <footer className="bg-[#2C2C2C] text-white rounded-t-4xl" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto flex flex-col px-6 py-12 space-y-8">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ${isRTL ? "text-right" : "text-left"}`}>
          <div className="flex flex-col gap-4">
            <figure>
              <Image src="/dima-logo-white.svg" alt="dima logo white" width={120} height={50} />
            </figure>
            <h2 className="capitalize text-2xl">{t("dima.description")}</h2>
            <RequestDemoButton className="bg-white! text-black!" computerVariant="black" size="xl" />
          </div>

          <FooterLinks title={t("solutions.title")} links={solutions} />
          <FooterLinks title={t("resources.title")} links={resources} />
          <FooterLinks
            title={t("getInTouch.title")}
            links={[{ title: t("getInTouch.mail"), href: "mailto:info@darwinz.ai" }]}
          />
        </div>

        <div className="w-full flex justify-center lg:justify-end">
          <SocialMediaLinks />
        </div>

        <div className="h-px w-full bg-white/20"></div>

        <div className={`flex flex-col sm:flex-row justify-between items-center gap-4 text-sm ${isRTL ? "text-right" : "text-left"}`}>
          <LanguageSwitcher />
          <p className="text-gray-300">{t("copyright")}</p>
          <Link href="/privacy-policy" className="hover:text-primary transition-colors duration-200">
            {t("privacyPolicy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
