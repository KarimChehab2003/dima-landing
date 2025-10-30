import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaDisplay } from "react-icons/fa6";
import FooterLinks from "./FooterLinks";
import { dimaSolutions, footerResourcesLinks } from "@/data/constants/links";
import SocialMediaLinks from "./SocialMediaLinks";
import LanguageSwitcher from "../LanguageSwitcher";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

function Footer() {
    const t = useTranslations("Footer");
    const tNav = useTranslations("Navbar");
    const locale = useLocale();
    const isRTL = locale === "ar";

    // Translate solutions using available titleKey on dimaSolutions; fallback to original title
    const translatedSolutions = dimaSolutions.map(link => ({
        ...link,
        title: ("titleKey" in link && link.titleKey) ? tNav(link.titleKey as unknown as any) : link.title
    }));

    // Translate footer resources using Footer namespace
    const translatedFooterResources = footerResourcesLinks.map(link => {
        const keyMap: Record<string, string> = {
            "Case Studies": "resources.caseStudies",
            "Blogs": "resources.blogs",
            "FAQs": "resources.faqs"
        };
        const key = keyMap[link.title as string];
        return {
            ...link,
            title: key ? t(key as unknown as any) : link.title
        };
    });

    return (
        <footer className="bg-[#2C2C2C] text-white rounded-t-4xl" dir={isRTL ? "rtl" : "ltr"}>
            <div className="container mx-auto flex flex-col px-6 py-12 space-y-8">
                {/* Dima & Footer Links */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ${isRTL ? "text-right" : "text-left"}`}>
                    <div className="flex flex-col gap-4">
                        <figure>
                            <Image
                                src="/dima-logo-white.png"
                                alt="dima logo white"
                                width={120}
                                height={50}
                            />
                        </figure>
                        <h2 className="capitalize text-2xl ">{t("dima.description")}</h2>
                        <div>
                            <Button
                                size="lg"
                                className="flex items-center gap-2 bg-white! hover:bg-white/90! transition-colors duration-200 text-black!"
                            >
                                <FaDisplay className="size-5" />
                                <span>{t("dima.requestDemo")}</span>
                            </Button>
                        </div>
                    </div>

                    <FooterLinks title={t("solutions.title")} links={translatedSolutions} />
                    <FooterLinks title={t("resources.title")} links={translatedFooterResources} />
                    <FooterLinks
                        title={t("getInTouch.title")}
                        links={[{ title: t("getInTouch.mail"), href: "mailto:info@darwinz.ai" }]}
                    />
                </div>

                {/* Social Media */}
                <div className="w-full flex justify-center lg:justify-end">
                    <SocialMediaLinks />
                </div>

                {/* Separator */}
                <div className="h-px w-full bg-white/20"></div>

                {/* Language Switch & Copyright */}
                <div className={`flex flex-col sm:flex-row justify-between items-center gap-4 text-sm ${isRTL ? "text-right" : "text-left"}`}>
                    <LanguageSwitcher />
                    <p className="text-gray-300">{t("copyright")}</p>
                    <Link
                        href="/privacy-policy"
                        className="hover:text-primary transition-colors duration-200"
                    >
                        {t("privacyPolicy")}
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
