import Image from "next/image";
import SectionWrapper from "../../../../components/shared/SectionWrapper";
import { useTranslations } from "next-intl";
import { testimonialAssets } from "@/data/constants/solutionPageAssets";

function TestimonialSection({ slug }: { slug: string }) {
    const t = useTranslations(`Solutions.${slug}.testimonial`)
    const assets = testimonialAssets[slug];
    return (
        <SectionWrapper>
            <div className="container mx-auto flex flex-col lg:flex-row justify-center items-stretch gap-8 my-12 px-4 sm:px-6 lg:px-8">
                {/* Text Section */}
                <div className="flex-1 flex flex-col sm:flex-row gap-6 sm:gap-8 text-center sm:text-left order-2 lg:order-1">
                    {/* Quote image */}
                    <figure className="flex justify-center sm:justify-start items-start shrink-0">
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/Solutions%2FTestimonial%2Fquote-marks-solutions.png?alt=media&token=f15801a5-6250-4d4e-9490-0afb97e2d9fc"
                            alt="quote marks"
                            width={70}
                            height={60}
                            className="sm:w-[89px] sm:h-[73px]"
                        />
                    </figure>

                    {/* Text */}
                    <div className="flex-1 flex flex-col justify-between">

                        <h2 className="text-4xl sm:text-3xl lg:text-[44px] font-semibold capitalize mb-4 leading-snug">
                            {t("title")}
                        </h2>
                        <p className="text-base sm:text-lg font-medium leading-relaxed">
                            “{t("quote")}”
                        </p>


                        <div
                            className="flex flex-col sm:flex-row items-center sm:items-center sm:gap-4 mt-6 sm:mt-8">
                            <figure className="relative w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-0">
                                <Image
                                    src={assets.companyLogo}
                                    alt="wadi degla logo"
                                    fill
                                    className="object-contain"
                                />
                            </figure>

                            <div>
                                <p className="font-medium text-lg sm:text-xl">
                                    {t("name")}
                                </p>
                                <p className="text-primary text-sm font-bold">
                                    {t("jobRole")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <figure
                    className="relative flex-1 h-64 sm:h-80 md:h-[400px] lg:h-[468px] order-1 lg:order-2">
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/Solutions%2FTestimonial%2Ftestimonial-image.png?alt=media&token=d0a324ab-4a0d-46ce-8467-93c9d659bcfb"
                        fill
                        className="object-contain"
                        alt="testimonial image"
                    />
                </figure>
            </div>
        </SectionWrapper>
    );
}

export default TestimonialSection;
