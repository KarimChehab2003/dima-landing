import Image from "next/image";
import SectionWrapper from "../../../../components/shared/SectionWrapper";
import LogoCarousel from "../../(home)/components/LogoCarousel";
import CounterPercentage from "../components/CounterPercentage";
import { useTranslations } from "next-intl";

function HeroSection({ slug }: { slug: string }) {
    const t = useTranslations(`Solutions.${slug}.hero`);
    const metrics = t.raw("metrics") as { number: number, title: string }[];
    return (
        <SectionWrapper className="min-h-dvh mt-4">
            <div className="container mx-auto flex flex-col justify-center items-center gap-8 ">
                {/* Heading */}
                <h2 className="bg-black text-white uppercase w-fit p-1 rounded-sm italic tracking-wide">{t("title")}</h2>
                <h1 className="text-2xl lg:text-[48px] font-normal text-center capitalize">{t("subTitle")}</h1>

                {/* Images */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-4">
                    {/* always shown */}
                    <figure className="p-1 rounded-lg bg-muted/50">
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/Solutions%2FHero%2Fhero-image-1.svg?alt=media&token=f2f62a52-a3a5-451e-8e63-3627066f6a8b"
                            alt="Hero Image 1"
                            width={322}
                            height={322}
                            className="w-[300px] md:w-[400px] lg:w-[322px] h-auto transition-all"
                        />
                    </figure>

                    {/* hidden on tablet and mobile */}
                    <figure className="hidden lg:block p-1 rounded-lg bg-muted/50">
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/Solutions%2FHero%2Fhero-image-2.svg?alt=media&token=ff992d4f-28d8-4136-884a-596b90411b9f"
                            alt="Hero Image 2"
                            width={322}
                            height={322}
                        />
                    </figure>
                </div>


                {/* Logo Carousel */}
                <LogoCarousel />

                {/* Percentages */}
                <div className="grid w-full gap-6 
                sm:grid-cols-1 
                md:grid-cols-2 
                lg:grid-cols-3">
                    {metrics.map((metric, i) => (
                        <CounterPercentage
                            key={metric.title}
                            number={metric.number}
                            text={metric.title}
                            className={i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
                        />
                    ))}
                </div>

            </div>
        </SectionWrapper>
    );
}

export default HeroSection;