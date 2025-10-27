import SectionWrapper from "../components/SectionWrapper";
import TestimonialCarousel from "../components/TestimonialCarousel";

export default function TestimonialSection() {

    return (
        <SectionWrapper>
            <div className="container mx-auto">
                <h2 className="text-4xl sm:text-5xl text-center mb-8">Hear It From Our Clients</h2>
                <TestimonialCarousel />
            </div>
        </SectionWrapper>
    );
}
