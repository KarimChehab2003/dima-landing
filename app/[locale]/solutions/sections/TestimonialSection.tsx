import Image from "next/image";
import SectionWrapper from "../../(home)/components/SectionWrapper";

function TestimonialSection() {
    return (
        <SectionWrapper>
            <div className="container mx-auto flex flex-col lg:flex-row justify-center items-stretch gap-8 my-12 px-4 sm:px-6 lg:px-8">
                {/* Text Section */}
                <div className="flex-1 flex flex-col sm:flex-row gap-6 sm:gap-8 text-center sm:text-left order-2 lg:order-1">
                    {/* Quote image */}
                    <figure className="flex justify-center sm:justify-start items-start shrink-0">
                        <Image
                            src="/quote-marks-solutions.png"
                            alt="quote marks"
                            width={70}
                            height={60}
                            className="sm:w-[89px] sm:h-[73px]"
                        />
                    </figure>

                    {/* Text */}
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-semibold capitalize mb-4 leading-snug">
                                hear it from our clients
                            </h2>
                            <p className="text-base sm:text-lg lg:text-2xl leading-relaxed">
                                “dima should be the go-to partner for any business serious about
                                customer satisfaction and brand perception. Their ability to
                                blend data, creativity and strategy makes a real difference.”
                            </p>
                        </div>

                        <div
                            className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-4 mt-6 sm:mt-8">
                            <figure className="relative w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-0">
                                <Image
                                    src="/testimonial-logos/wadi-degla.png"
                                    alt="wadi degla logo"
                                    fill
                                    className="object-contain"
                                />
                            </figure>

                            <div>
                                <p className="font-semibold text-lg sm:text-xl lg:text-2xl">
                                    Samer Yassa
                                </p>
                                <p className="text-primary text-sm sm:text-base">
                                    Business Development Manager, Wadi Degla
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <figure
                    className="relative flex-1 h-64 sm:h-80 md:h-[400px] lg:h-[468px] order-1 lg:order-2">
                    <Image
                        src="/testimonial-image.png"
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
