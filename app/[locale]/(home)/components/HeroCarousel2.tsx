"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";

type Slide = { title: string; image: string };
type HeroCarousel2Props = {
    slides: Slide[];
    activeSlide: number;
    setActiveSlide: (index: number) => void;
};

export default function HeroCarousel2({
    slides,
    activeSlide,
    setActiveSlide,
}: HeroCarousel2Props) {
    const settings = {
        centerMode: true,
        centerPadding: "0px",
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 600,
        beforeChange: (_: number, next: number) => setActiveSlide(next),
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                },
            },
        ],
    };

    return (
        <div
            className="relative w-full px-2 sm:px-4 md:px-8 overflow-hidden"
        >
            <Slider {...settings} className="[&_.slick-slide]:px-2!">
                {slides.map((slide, index) => {
                    const total = slides.length;
                    let distance = index - activeSlide;
                    if (distance < -Math.floor(total / 2)) distance += total;
                    if (distance > Math.floor(total / 2)) distance -= total;

                    let transform = "", zIndex = 1

                    // Simplify 3D transform for mobile
                    if (distance === 0) {
                        transform = "translateZ(100px) scale(1.2)";
                        zIndex = 3;

                    } else if (Math.abs(distance) === 1) {
                        transform = "translateZ(-30px) scale(0.9)";
                        zIndex = 2;

                    } else {
                        transform = "translateZ(-150px) scale(0.8)";
                        zIndex = 1;

                    }

                    return (
                        <motion.div
                            key={index}
                            animate={{ transform, zIndex }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="flex justify-center items-center"
                            style={{ transformOrigin: "center center" }}
                        >
                            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] flex justify-center items-center">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="object-contain drop-shadow-xl"
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </Slider>
        </div>
    );
}
