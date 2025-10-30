"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialsInfo } from "@/data/constants/info";
import TestimonialCard from "./TestimonialCard";
import { useState } from "react";
import { TestimonialType } from "@/types/info";

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

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow,
        slidesToScroll: 1,
        swipe: true,
        autoplay: true,
        speed: 600,
        dots: false,
        arrows: false,
        adaptiveHeight: true,
        beforeChange: (_: number, next: number) => setActiveSlide(next),
    };

    const source = (items && items.length ? items : testimonialsInfo).concat(
        items && items.length ? items : testimonialsInfo
    );

    return (
        <div className="w-full md:px-8 lg:px-12">
            <Slider {...settings}>
                {source.map((info, index) => {
                    const total = source.length;
                    let distance = Math.abs(index - activeSlide);
                    if (distance > total / 2) distance = total - distance;
                    const classIndex = Math.min(distance, scaleOpacityClasses.length - 1);

                    return (
                        <div
                            key={index}
                            className={`flex justify-center transition-all duration-500 ease-in-out ${scaleOpacityClasses[classIndex]}`}
                        >
                            <TestimonialCard {...info} />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}
