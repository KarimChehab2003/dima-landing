import SectionWrapper from "@/components/shared/SectionWrapper";
import { TCOCalculator } from "./components/TCOCalculator";

function StackConsolidationCalculatorPage() {
    return (
        <SectionWrapper className="min-h-dvh mt-24">
            <TCOCalculator />
        </SectionWrapper>
    );
}

export default StackConsolidationCalculatorPage;