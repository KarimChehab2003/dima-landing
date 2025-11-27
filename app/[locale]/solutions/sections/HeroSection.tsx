import Image from "next/image";
import SectionWrapper from "../../../../components/shared/SectionWrapper";
import LogoCarousel from "../../(home)/components/LogoCarousel";
import CounterPercentage from "../components/CounterPercentage";
import { useTranslations } from "next-intl";
import { solutionImages } from "@/data/constants/solutionImages";

function HeroSection({ slug }: { slug: string }) {
    const t = useTranslations(`Solutions.${slug}.hero`);
    const metrics = t.raw("metrics") as { number: number, title: string }[];
    return (
        <SectionWrapper className="min-h-dvh mt-20">
            <div className="container mx-auto flex flex-col justify-center items-center gap-4">
                {/* Heading */}
                <h2 className="bg-black text-white uppercase w-fit p-1 rounded-sm italic tracking-wide">{t("title")}</h2>
                <h1 className="text-2xl lg:text-[48px] font-normal text-center capitalize">{t("subTitle")}</h1>

                {/* Images */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-4">
                    {solutionImages[slug].hero.map((src, index) => (
                        <figure key={index} className={`relative w-[300px] md:w-[400px] lg:w-[322px] h-[322px] ${index === 1 ? "hidden lg:block" : ""}`}>
                            <Image
                                src={src}
                                alt={`Hero Image ${index + 1}`}
                                fill
                                className="object-fill"
                                priority={true}
                                fetchPriority="high"
                            />
                        </figure>
                    ))}
                </div>


                {/* Logo Carousel */}
                <LogoCarousel />

                {/* Percentages */}
                <div className="grid w-full gap-3 
                grid-cols-2 
                lg:grid-cols-3">
                    {metrics.map((metric, i) => (
                        <CounterPercentage
                            key={metric.title}
                            number={metric.number}
                            text={metric.title}
                            className={i === 2 ? "col-span-2 lg:col-span-1" : ""}
                        />
                    ))}
                </div>

            </div>
        </SectionWrapper>
    );
}

export default HeroSection;