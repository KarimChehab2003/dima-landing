import SectionWrapper from "@/components/shared/SectionWrapper";
import LogoCarousel from "../(home)/components/LogoCarousel";
import HeroSection from "./sections/HeroSection";
import FilterSection from "./sections/FilterSection";
import DimaSection from "./sections/DimaSection";
import PaginatedBlogsSection from "./sections/PaginatedBlogsSection";

function CaseStudiesPage() {
    return (
        <main>
            <HeroSection />
            <SectionWrapper>
                <LogoCarousel />
                <FilterSection />
                <DimaSection />
                <PaginatedBlogsSection />
            </SectionWrapper>
        </main>
    );
}

export default CaseStudiesPage;