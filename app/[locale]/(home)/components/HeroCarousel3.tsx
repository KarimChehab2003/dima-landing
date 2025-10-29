"use client";

import SpinCarousel3D from "@carousel-ui/react-spin-carousel-3d";
import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = { title: string; image: string };

type HeroCarousel3Props = {
    slides: Slide[];
    activeSlide: number;
    setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
};

export default function HeroCarousel3({
    slides,
    activeSlide,
    setActiveSlide,
}: HeroCarousel3Props) {
    const [itemWidth, setItemWidth] = useState<number>(260);
    // Update itemWidth based on screen size
    useEffect(() => {
        const updateWidth = () => {
            if (window.innerWidth < 640) setItemWidth(160); // mobile
            else if (window.innerWidth < 1024) setItemWidth(220); // tablet
            else setItemWidth(260); // desktop
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    // Auto increment current index
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide(prev => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [setActiveSlide]);

    return (
        <div className="w-full max-w-3xl flex justify-center items-center relative">
            <SpinCarousel3D
                initialActiveIndex={1}
                isAutoPlay={true}
                autoPlayInterval={3000}
                width={"100%"}
                height={400}
                itemWidth={itemWidth}
                displayMode="image"
                showRadioButtons={false}
                imageFit="contain"
                data={slides}
                itemStyle={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                renderItem={(item: Slide, i: number) => (
                    <div
                        key={i}
                        className={`${i === activeSlide % slides.length
                            ? "scale-110"
                            : "scale-90"
                            } transition-all duration-700`}
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={240}
                            height={160}
                            className="object-contain w-full h-full"
                        />
                    </div>
                )}
            />
            <div className="absolute inset-0 z-50 pointer-events-auto"></div>
        </div>
    );
}
