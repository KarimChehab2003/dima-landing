import SectionWrapper from "../../(home)/components/SectionWrapper";
import PinnedScrollSection from "../components/PinnedScrollSection";

function StayAheadSection() {
    return (
        <SectionWrapper>
            <div className="container mx-auto flex flex-col justify-center items-center gap-4 my-12">
                {/* Heading */}
                <h2 className="text-2xl lg:text-[44px] text-center">Stay ahead of the conversation</h2>
                <p className="text-xl">Get to the heart of millions of mentions with AI powered insights that drive smarter & faster decisions</p>

                {/* Pinned Scroll Section */}
                <PinnedScrollSection />
            </div>
        </SectionWrapper>
    );
}

export default StayAheadSection;