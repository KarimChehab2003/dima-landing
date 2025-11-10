import { layeredCardsData } from "@/data/constants/info";
import LayeredCard from "../components/LayeredCard";

function StackedCardsSection() {
    return (
        <section className="container mx-auto flex flex-col justify-center items-center gap-8  bg-black text-white p-6 sm:p-10 lg:p-16 rounded-3xl min-h-[500px]">
            <div className="flex flex-col justify-center gap-10 lg:gap-12 text-center lg:text-left">
                {/* Heading & Description */}
                <div className="max-w-4xl mx-auto lg:mx-0 space-y-4">
                    <h2 className="text-2xl sm:text-3xl lg:text-[44px] capitalize font-semibold leading-tight">
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
        </section>
    );
}

export default StackedCardsSection;
