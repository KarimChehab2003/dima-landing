"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
import { useState, useRef } from "react";
import { TestimonialType } from "@/types/info";
import { useLocale } from "next-intl";

const scaleOpacityClasses = [
    "scale-110 opacity-100 z-20 relative", // active
    "scale-90 opacity-75 z-10 relative",
    "scale-75 opacity-50 z-0 relative",
];

type TestimonialCarouselProps = {
    slidesToShow: number;
    setSlidesToShow: React.Dispatch<React.SetStateAction<number>>;
    items?: TestimonialType[];
};

export default function TestimonialCarousel({
    slidesToShow,
    items,
}: TestimonialCarouselProps) {
    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef<Slider | null>(null);
    const isRTL = useLocale() === "ar";
    const isWideScreen = window.innerWidth >= 1024;

    const settings = {
        centerMode: true,
        centerPadding: isWideScreen ? "15px" : "50px",
        infinite: true,
        slidesToShow,
        slidesToScroll: 1,
        swipe: true,
        autoplay: true,
        speed: 500,
        dots: false,
        arrows: false,
        adaptiveHeight: true,
        rtl: isRTL,
        beforeChange: (_: number, next: number) => setActiveSlide(next),
    };

    const slides = items?.concat(items);

    return (
        <div className="w-full md:px-8 lg:px-12">
            <Slider ref={sliderRef} {...settings}>
                {slides?.map((info, index) => {
                    const total = slides.length;
                    let distance = Math.abs(index - activeSlide);
                    if (distance > total / 2) distance = total - distance;
                    const classIndex = Math.min(distance, scaleOpacityClasses.length - 1);

                    return (
                        <div
                            key={index}
                            className={`flex justify-center transition-all duration-500 ease-in-out select-none ${scaleOpacityClasses[classIndex]}`}
                            onClick={() => sliderRef.current?.slickGoTo(index)}
                        >
                            <TestimonialCard {...info} />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}
