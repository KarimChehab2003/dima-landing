import { enterpriseFeaturesCards } from "@/data/constants/info";
import SectionWrapper from "../../(home)/components/SectionWrapper";
import EntrepriseCard from "../components/EnterpriseCard";

function BuiltEntreprisesSection() {
    return (
        <SectionWrapper>
            <div className="container mx-auto flex flex-col justify-center items-center gap-8 my-12">
                {/* Heading */}
                <h2 className="text-2xl lg:text-[44px] text-center mb-8">Built for entreprises</h2>

                {/* Cards */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                    {enterpriseFeaturesCards.map((card) => (
                        <li key={card.title}>
                            <EntrepriseCard {...card} />
                        </li>
                    ))}
                </ul>
            </div>
        </SectionWrapper>
    );
}

export default BuiltEntreprisesSection;