import { Button } from "@/components/ui/button";
import { blogsLinks, resourcesLinks } from "@/data/constants/links";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

function ResourcesDropdown() {
    const t = useTranslations("Navbar.resources.links");
    const locale = useLocale();
    const isRTL = locale === "ar";
    return (
        <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
            <div className={`flex-1 flex justify-center items-start gap-8 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                {/* Blogs Section */}
                <div>
                    <h2 className={`text-3xl font-semibold ${isRTL ? 'text-right' : ''}`}>{t("blogs.title")}</h2>
                    <div className={`w-8 h-0.5 bg-primary mb-4 flex ${isRTL ? 'ml-auto' : 'mr-auto'}`}></div>
                    <ul className={`grid grid-cols-1 gap-x-8 gap-y-4 ${isRTL ? 'text-right' : ''}`}>
                        {blogsLinks.map((link, i) => (
                            <li key={link.href} className={`inline-flex items-center gap-2 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                                <div className="h-15 w-20 rounded-lg bg-muted"></div>
                                <Link href={link.href}>{t(`blogs.blog${i + 1}`)}</Link>
                            </li>
                        ))}
                    </ul>
                    <Button className="mt-4" size={"xl"}>
                        <Link href="/blogs">{t("blogs.viewAllBlogs")}</Link>
                    </Button>
                </div>

                {/* Vertical Separator */}
                <div className="w-px h-60 bg-gray-300"></div>

                {/* More Resources Section */}
                <div>
                    <h2 className={`text-3xl font-semibold ${isRTL ? 'text-right' : ''}`}>{t("moreResources.title")}</h2>
                    <div className={`w-8 h-0.5 bg-primary mb-4 flex ${isRTL ? 'ml-auto' : 'mr-auto'}`}></div>
                    <ul className={`grid grid-cols-1 gap-y-4 gap-x-8 ${isRTL ? 'text-right' : ''}`}>
                        {resourcesLinks.map((link) => (
                            <li key={link.href} className={`inline-flex items-center gap-2 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                                <Image
                                    src={link.icon!}
                                    alt={"icon"}
                                    width={20}
                                    height={20}
                                />
                                <Link href={link.href}>{t(`moreResources.${link.translationKey}`)}</Link>
                                <p className="text-primary text-xs">Coming soon</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <figure className="flex-1 flex justify-center items-center">
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/Navbar%2Fanalyze-data.png?alt=media&token=27c4ab47-2856-47f7-8524-5043f35a5363"
                    alt="moon image"
                    width={331}
                    height={331}
                />
            </figure>
        </div>
    );
}

export default ResourcesDropdown;