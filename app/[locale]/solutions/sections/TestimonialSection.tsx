import Image from "next/image";
import SectionWrapper from "../../(home)/components/SectionWrapper";

function TestimonialSection() {
    return (
        <SectionWrapper>
            <div className="container mx-auto flex justify-center items-stretch gap-8 my-12">
                {/* Text Section*/}
                <div className="flex-1 flex gap-8">
                    {/* Quote image */}
                    <figure className="flex items-start">
                        <Image
                            src="/quote-marks-solutions.png"
                            alt="quote marks"
                            width={89}
                            height={73}
                        />
                    </figure>

                    {/* Text */}
                    <div className="flex-1 flex flex-col justify-between">

                        <h2 className="text-[44px] font-semibold capitalize mb-4">
                            hear it from our clients
                        </h2>
                        <p className="text-2xl leading-relaxed">
                            “dima should be the go-to partner for any business serious about customer satisfaction and brand perception. Their ability to blend data, creativity and strategy makes a real difference”
                        </p>

                        <div className="flex items-center gap-4 mt-6">
                            <figure className="relative min-w-20 min-h-20">
                                <Image
                                    src="/testimonial-logos/wadi-degla.png"
                                    alt="wadi degla logo"
                                    fill
                                    className="object-contain"
                                />
                            </figure>

                            <div>
                                <p className="font-semibold text-2xl">Samer Yassa</p>
                                <p className="text-primary text-sm">
                                    Business Development Manager, Wadi Degla
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quote image */}
                <figure className="relative flex-1 h-[468px]">
                    <Image
                        src="/testimonial-image.png"
                        fill
                        className="object-contain"
                        alt="quote image"
                    />
                </figure>
            </div>
        </SectionWrapper>
    );
}

export default TestimonialSection;
