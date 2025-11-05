import SectionWrapper from "@/components/shared/SectionWrapper";
import GuideSection from "./sections/GuideSection";
import HeroSection from "./sections/HeroSection";
import LatestSection from "./sections/LatestSection";
import VideosSection from "./sections/VideosSection";
import SocialMediaAnalyticsSection from "./sections/SocialMediaAnalyticsSection";
import RequestDemoSection from "@/components/shared/RequestDemoSection";

function BlogsPage() {
    return (
        <main>
            <SectionWrapper>
                <HeroSection />
                <LatestSection />
                <VideosSection title="Learn more from dima.ai on social" videos={[{ src: "/learn-1.svg" }, { src: "/learn-2.svg" }, { src: "/learn-3.svg" }]} />
                <SocialMediaAnalyticsSection />
                <GuideSection />
            </SectionWrapper>
            <RequestDemoSection />
        </main>
    );
}

export default BlogsPage;