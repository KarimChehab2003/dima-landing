import { empoweringAgenciesInfo } from "@/data/constants/info";
import SectionWrapper from "../components/SectionWrapper";
import EmpoweringAgenciesCard from "../components/EmpoweringAgenciesCard";

function EmpoweringAgenciesSection() {
    return (
        <SectionWrapper className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 py-10 md:py-16">
            <div
                className="container mx-auto space-y-10 md:space-y-14 bg-no-repeat bg-contain"
                style={{
                    backgroundImage: "url('/empowering-agencies-bg.png')",
                    backgroundPosition: "right center",
                }}
            >
                {/* Heading */}
                <h2 className="text-2xl sm:text-4xl md:text-5xl text-center font-bold leading-tight">
                    Empowering Agencies & Enterprises with&nbsp;
                    <span className="block text-primary">Arabic-First Intelligence</span>
                </h2>

                {/* Cards Grid */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {empoweringAgenciesInfo.map((info) => (
                        <li key={info.title}>
                            <EmpoweringAgenciesCard {...info} />
                        </li>
                    ))}
                </ul>
            </div>
        </SectionWrapper>
    );
}

export default EmpoweringAgenciesSection;
