import LayeredCard from "../components/LayeredCard";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { CaseStudy } from "@/types/content";
import { useLocale } from "next-intl";

function StackedCardsSection({ caseStudy }: { caseStudy: CaseStudy }) {
    const locale = useLocale();
    const isRTL = locale === "ar";
    return (
        <SectionWrapper className="mt-24">
            <div className="container mx-auto flex flex-col justify-center items-center gap-8 bg-[#053659] text-white p-6 sm:p-10 lg:p-16 rounded-4xl min-h-[500px] z-0">
                <div className={`flex flex-col justify-center gap-10 lg:gap-12 text-center ${isRTL ? "lg:text-right" : "lg:text-left"}  w-full`}>
                    {/* Heading & Description */}
                    <div className="lg:mx-0 space-y-4">
                        <h2 className="text-2xl sm:text-3xl lg:text-[40px] capitalize leading-tight">
                            {caseStudy.content.type}
                        </h2>
                        <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
                            {caseStudy.content.title}
                        </p>
                    </div>

                    {/* Layered Cards */}
                    <ul className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-4 w-full">
                        {caseStudy.content.metrics.map((data, i, arr) => {
                            const isLast = i === arr.length - 1;
                            return (
                                <li
                                    key={`${data.title}-${i}`}
                                    className={`flex justify-center ${isLast ? "col-span-2 lg:col-span-1" : ""}`}
                                >
                                    <LayeredCard {...data} index={i} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </SectionWrapper>

    );
}

export default StackedCardsSection;
