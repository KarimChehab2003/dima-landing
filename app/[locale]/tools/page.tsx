import SectionWrapper from "@/components/shared/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Metadata } from "next";
import RequestDemoSection from "@/components/shared/form/RequestDemoSection";
import { toolLinks } from "@/data/tools";

export const metadata: Metadata = {
    title: "Tools & Calculators - dima",
    description:
        "Explore dima's free AI tools for marketers and PR teams: Arabic Coverage Gap Audit, Arabic Dialect Accuracy Lab, Lost Mentions Calculator, Crisis Readiness Scorecard, and Monitoring Stack Consolidation Calculator. Analyze campaigns, detect blind spots, and optimize media monitoring.",

    openGraph: {
        title: "Tools & Calculators - dima",
        description:
            "Use dima's AI tools to audit Arabic coverage gaps, test dialect accuracy, calculate missed mentions, evaluate crisis readiness, and consolidate monitoring stacks. Boost PR and marketing performance.",
        url: "https://thedar.ai/tools",
        siteName: "dima",
        type: "website",
        images: [
            {
                url: "/og/tools.png",
                width: 1200,
                height: 630,
                alt: "dima Tools & Calculators OG Image",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Tools & Calculators - dima",
        description:
            "Discover dima's free AI tools for Arabic media monitoring and PR: Coverage Gap Audit, Dialect Accuracy Lab, Lost Mentions Calculator, Crisis Scorecard, and Stack Consolidation Calculator.",
        images: ["/og/tools.png"],
    },

    alternates: {
        canonical: "https://thedar.ai/tools",
    },
};


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