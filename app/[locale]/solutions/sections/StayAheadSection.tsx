import { scrollingCards } from "@/data/constants/info";
import SectionWrapper from "../../(home)/components/SectionWrapper";
import PinnedScrollSection from "../components/PinnedScrollSection";
import ScrollingCard from "../components/ScrollingCard";
import RequestDemoButton from "../../(home)/components/RequestDemoButton";

function StayAheadSection() {
    return (
        <SectionWrapper className="mb-0">
            <div className="container mx-auto flex flex-col justify-center items-center gap-4 my-12">
                {/* Heading */}
                <h2 className="text-2xl lg:text-[44px] text-center ">Stay ahead of the conversation</h2>
                <p className="text-3xl font-light text-center">Get to the heart of millions of mentions with AI powered insights that drive smarter & faster decisions</p>

                {/* Pinned Scroll Section for desktop */}
                <div className="hidden lg:block">
                    <PinnedScrollSection />
                </div>

                {/* Card list for mobile */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
                    {
                        scrollingCards.map((card) => (
                            <li key={card.title}>
                                <ScrollingCard
                                    {...card}
                                />
                            </li>
                        ))
                    }
                </ul>

                {/* CTA mobile */}
                <div className="text-xl text-center font-semibold bg-black rounded-2xl px-6 py-4 mt-8 lg:hidden w-full flex flex-col justify-center items-center gap-2">
                    <h3 className="text-white">Turn conversations into insights</h3>
                    <RequestDemoButton />
                </div>
            </div>
        </SectionWrapper>
    );
}

export default StayAheadSection;