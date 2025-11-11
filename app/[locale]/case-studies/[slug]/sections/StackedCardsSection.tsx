import { layeredCardsData } from "@/data/constants/info";
import LayeredCard from "../components/LayeredCard";
import SectionWrapper from "@/components/shared/SectionWrapper";

function StackedCardsSection() {
    return (
        <SectionWrapper className="mt-24">
            <div className="container mx-auto flex flex-col justify-center items-center gap-8 bg-[#053659] text-white p-6 sm:p-10 lg:p-16 rounded-4xl min-h-[500px]">
                <div className="flex flex-col justify-center gap-10 lg:gap-12 text-center lg:text-left">
                    {/* Heading & Description */}
                    <div className="lg:mx-0 space-y-4">
                        <h2 className="text-2xl sm:text-3xl lg:text-[40px] capitalize leading-tight">
                            Customer success story
                        </h2>
                        <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
                            How an agency based in Egypt uses{" "}
                            <span className="font-semibold">dima</span> to {""}
                            <b>deliver 5x more accurate media coverage</b> for clients.
                        </p>
                    </div>

                    {/* Layered Cards */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-4">
                        {layeredCardsData.map((data, i) => (
                            <li key={i} className="flex justify-center">
                                <LayeredCard {...data} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SectionWrapper>

    );
}

export default StackedCardsSection;
