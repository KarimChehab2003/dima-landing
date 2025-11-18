import SectionWrapper from "../../../../components/shared/SectionWrapper";
import TestimonialMobile from "../components/TestimonialMobile";
import TestimonialWeb from "../components/TestimonialWeb";


function TestimonialSection({ slug }: { slug: string }) {

    return (
        <SectionWrapper>
            {/* For Desktop and Tablet */}
            <TestimonialWeb slug={slug} />

            {/* For Mobile */}
            <TestimonialMobile slug={slug} />
        </SectionWrapper>
    );
}

export default TestimonialSection;
