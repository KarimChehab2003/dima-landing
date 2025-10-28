import { empoweringAgenciesInfo } from "@/data/constants/info";
import SectionWrapper from "../components/SectionWrapper";
import EmpoweringAgenciesCard from "../components/EmpoweringAgenciesCard";

function EmpoweringAgenciesSection() {
    return (
        <SectionWrapper className="justify-center items-center px-6 sm:px-10 md:px-20">
            <div
                className="container mx-auto p-0 sm:p-6 md:p-8 space-y-8 bg-no-repeat bg-contain"
                style={{
                    backgroundImage: "url('/empowering-agencies-bg.png')",
                    backgroundPosition: "right center",
                }}
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-center leading-tight">
                    Empowering Agencies & Enterprises with&nbsp;
                    <p className="text-primary">Arabic-First Intelligence</p>
                </h2>

                <ul className="grid grid-cols-1 md:grid-cols-3 gap-12">
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