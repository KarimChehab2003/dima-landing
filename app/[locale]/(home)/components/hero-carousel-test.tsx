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
                breakpoint: 768,
                settings: { slidesToShow: 1, swipe: true, centerMode: true },
            },
        ],
    };

    return (
        <div
            className="w-full relative"
            style={{
                perspective: "1200px",
                transformStyle: "preserve-3d",
            }}
        >
            <Slider
                {...settings}
                className="[&_.slick-slide]:px-2!"
            >
                {slides.map((slide, index) => {
                    const total = slides.length;
                    let distance = index - activeSlide;
                    if (distance < -Math.floor(total / 2)) distance += total;
                    if (distance > Math.floor(total / 2)) distance -= total;

                    let transform = "", zIndex = 1, opacity = 0.7;

                    if (distance === 0) {
                        // Active (center)
                        transform = "translateZ(120px) rotateY(0deg) scale(1.2)";
                        zIndex = 3;
                        opacity = 1;
                    } else if (distance === -1) {
                        // Left (slightly behind & left)
                        transform = "translateX(-10px) rotateY(8deg) translateZ(-20px) scale(0.85)";
                        zIndex = 2;
                        opacity = 0.9;
                    } else if (distance === 1) {
                        // Right (slightly behind & right)
                        transform = "translateX(10px) rotateY(-8deg) translateZ(-30px) scale(0.85)";
                        zIndex = 2;
                        opacity = 0.9;
                    } else {
                        // hidden slides
                        transform = "translateZ(-200px) scale(0.8)";
                        zIndex = 0;
                        opacity = 0;
                    }

                    return (
                        <motion.div
                            key={index}
                            animate={{ transform, opacity, zIndex }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="flex justify-center items-center"
                            style={{ transformOrigin: "center center" }}
                        >
                            <div className="relative w-full h-[500px] flex justify-center items-center">
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
