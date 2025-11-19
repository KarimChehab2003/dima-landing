import SectionWrapper from "@/components/shared/SectionWrapper";
import GuideSection from "./sections/GuideSection";
import HeroSection from "./sections/HeroSection";
import LatestSection from "./sections/LatestSection";
import VideosSection from "./sections/VideosSection";
import SocialMediaAnalyticsSection from "./sections/SocialMediaAnalyticsSection";
import RequestDemoSection from "@/components/shared/RequestDemoSection";
import { useTranslations } from "next-intl";


function BlogsPage() {
    const t = useTranslations("Blogs");
    return (
        <main>
            <SectionWrapper className="mt-20">
                <HeroSection />
                <LatestSection />
                <VideosSection title={t("videosSection.title")} videos={[{ src: "/learn-1.svg" }, { src: "/learn-2.svg" }, { src: "/learn-3.svg" }]} />
                <SocialMediaAnalyticsSection />
                <GuideSection />
            </SectionWrapper>
            <RequestDemoSection />
        </main>
    );
}

export default BlogsPage;