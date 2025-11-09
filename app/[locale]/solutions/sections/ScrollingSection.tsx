import SectionWrapper from "../../../../components/shared/SectionWrapper";
import PinnedScrollSection from "../components/PinnedScrollSection";
import ScrollingCard from "../components/ScrollingCard";
import RequestDemoButton from "../../../../components/shared/RequestDemoButton";
import { useTranslations } from "next-intl";
import { CardType } from "@/types/info";

function ScrollingSection({ slug }: { slug: string }) {
    const t = useTranslations(`Solutions.${slug}.scrollingSection`);
    const cards = t.raw("cards") as CardType[];
    return (
        <SectionWrapper className="mb-0">
            <div className="container mx-auto flex flex-col justify-center items-center gap-4 ">
                {/* Heading */}
                <h2 className="text-2xl md:text-[44px] text-center ">{t("title")}</h2>
                <p className="text-xl font-light text-center">{t("subTitle")}</p>

                {/* Pinned Scroll Section for desktop */}
                <div className="hidden lg:block">
                    <PinnedScrollSection cards={cards} />
                </div>

                {/* Card list for mobile */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
                    {
                        cards.map((card) => (
                            <li key={card.title} className="my-4">
                                <ScrollingCard
                                    {...card}
                                />
                            </li>
                        ))
                    }
                </ul>

                {/* CTA mobile */}
                <div className="text-xl text-center font-semibold bg-black rounded-2xl px-6 py-4 mt-8 lg:hidden w-full flex flex-col md:flex-row justify-center items-center gap-2">
                    <h3 className="text-white">{t("cta")}</h3>
                    <RequestDemoButton />
                </div>
            </div>
        </SectionWrapper>
    );
}

export default ScrollingSection;