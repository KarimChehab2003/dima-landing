import SectionWrapper from "@/components/shared/SectionWrapper";
import GuideSection from "./sections/GuideSection";
import HeroSection from "./sections/HeroSection";
import LatestSection from "./sections/LatestSection";
import LearnMoreSection from "./sections/LearnMoreSection";
import SocialMediaAnalyticsSection from "./sections/SocialMediaAnalyticsSection";
import RequestDemoSection from "@/components/shared/RequestDemoSection";

function BlogsPage() {
    return (
        <main>
            <SectionWrapper>
                <HeroSection />
                <LatestSection />
                <LearnMoreSection />
                <SocialMediaAnalyticsSection />
                <GuideSection />
            </SectionWrapper>
            <RequestDemoSection />
        </main>
    );
}

export default BlogsPage;