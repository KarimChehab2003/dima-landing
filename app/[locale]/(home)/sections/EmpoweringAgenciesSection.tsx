import { expandableCardInfo } from "@/data/constants/info";
import ExpandableCard from "../components/ExpandableCard";
import SectionWrapper from "../components/SectionWrapper";

// const empoweringAgenciesContent = {
//     title:
// }


function EmpoweringAgenciesSection() {
    return (
        <SectionWrapper className="justify-center items-center px-6 sm:px-10 md:px-20">
            <div
                className="container mx-auto p-4 sm:p-6 md:p-8 space-y-8 bg-no-repeat bg-contain"
                style={{
                    backgroundImage: "url('/empowering-agencies-bg.png')",
                    backgroundPosition: "right center",
                }}
            >
                {/* Title */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-center leading-tight">                    Empowering Agencies & Enterprises with&nbsp;
                    <p className="text-primary">Arabic-First Intelligence</p>
                </h2>

                <div className="flex justify-center p-1.5 rounded-xl bg-muted h-[400px] max-w-5xl mx-auto min-h-[300px] sm:min-h-[350px] md:min-h-[400px] ">
                    <div className="flex gap-2 w-full">
                        {
                            expandableCardInfo.map((info, i) => (
                                <ExpandableCard
                                    key={info.title}
                                    index={i + 1}
                                    {...info}
                                />
                            ))
                        }
                    </div>

                </div>
            </div>
        </SectionWrapper>
    );
}

export default EmpoweringAgenciesSection;