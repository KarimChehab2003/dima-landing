import RequestDemoSection from "@/components/shared/RequestDemoSection";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { toolLinks } from "@/data/constants/links";
import { useTranslations } from "next-intl";
import Link from "next/link";

function ToolsPage() {
    const t = useTranslations("Tools");
    return (
        <main>
            <SectionWrapper className="min-h-dvh mt-12">
                <div className="container mx-auto flex flex-col items-center">
                    {/* Header */}
                    <h4 className="text-sm md:text-base text-primary uppercase font-semibold tracking-widest mb-4">{t("badge")}</h4>
                    <h1 className="text-[24px] md:text-[44px] text-center max-w-2xl">{t("title")}</h1>

                    {/* Tools */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mt-12">
                        {
                            toolLinks.map((tool) => (
                                <Link key={tool.href} href={tool.href}>
                                    <article className="h-full space-y-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.07)] p-6">
                                        <Badge className="capitalize">{t("tryNow")}</Badge>
                                        <h2 className="text-lg sm:text-2xl font-medium">{t(`${tool.translationKey}.title`)}</h2>
                                        <p className="text-[#6d6d6d]">{t(`${tool.translationKey}.description`)}</p>
                                    </article>
                                </Link>
                            ))
                        }
                    </div>

                </div>
            </SectionWrapper>
            <RequestDemoSection />
        </main>
    );
}

export default ToolsPage;