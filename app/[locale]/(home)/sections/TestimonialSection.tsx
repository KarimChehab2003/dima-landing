import SectionWrapper from "../components/SectionWrapper";
import TestimonialCarousel from "../components/TestimonialCarousel";

export default function TestimonialSection() {

    return (
        <SectionWrapper>
            <div className="container mx-auto">
                <TestimonialCarousel />
            </div>
        </SectionWrapper>
    );
}
