"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testimonialsInfo } from "@/data/constants/info";
import TestimonialCard from "./TestimonialCard";
import { useState } from "react";

const scaleOpacityClasses = [
    "scale-110 opacity-100 z-20 relative", // active slide
    "scale-90 opacity-75 z-10 relative",
    "scale-75 opacity-50 z-5 relative",
];

function TestimonialCarousel() {
    const [activeSlide, setActiveSlide] = useState<number>(0);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipe: false,
        autoplay: true,
        speed: 500,
        dots: true,
        beforeChange: (_: number, next: number) => setActiveSlide(next),
        customPaging: (i: number) => (
            <div className={`mt-4 w-3 h-3 rounded-full hover:bg-primary ${i === activeSlide ? "bg-primary" : "bg-primary/30"} transition-colors duration-300`} >
            </div>
        ),
    };

    return (
        <Slider {...settings}>
            {testimonialsInfo.concat(testimonialsInfo).map((info, index) => {
                const total = testimonialsInfo.concat(testimonialsInfo).length;

                // Calculate shortest distance in infinite loop
                let distance = Math.abs(index - activeSlide);
                if (distance > total / 2) distance = total - distance;

                // Dynamic scaling and opacity class based on distance
                const classIndex = Math.min(distance, scaleOpacityClasses.length - 1);

                return (
                    <div
                        key={index}
                        className={`flex justify-center transition-all duration-500 ${scaleOpacityClasses[classIndex]}`}
                    >
                        <TestimonialCard {...info} />
                    </div>
                );
            })}
        </Slider>
    );
}

export default TestimonialCarousel;
