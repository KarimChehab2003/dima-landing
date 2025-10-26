"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import type { EmblaCarouselType } from "embla-carousel";
import Image from "next/image";

type Slide = {
    title: string;
    image: string;
};

type FeatureCarouselProps = {
    slides: Slide[];
    onSelectSlide: (index: number) => void;
    selectedIndex: number;
};

export default function HeroCarousel({ slides, onSelectSlide, selectedIndex }: FeatureCarouselProps) {
    const pluginRef = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
    const emblaRef = useRef<EmblaCarouselType | null>(null);

    const handleApi = (api: EmblaCarouselType | undefined) => {
        if (!api) return;
        emblaRef.current = api;

        const onSelect = () => {
            const selected = api.selectedScrollSnap();
            onSelectSlide(selected);
            api.scrollTo(selected);
        };

        api.on("select", onSelect);
        onSelect();
    };

    return (
        <Carousel
            opts={{
                loop: true,
                align: "center",
                skipSnaps: false
            }}
            plugins={[pluginRef.current]}
            setApi={handleApi}
            className="w-full"
        >
            <CarouselContent className="flex items-center">
                {slides.map((slide, index) => (
                    <CarouselItem
                        key={index}
                        className="flex-none basis-[90%] sm:basis-[60%] md:basis-[50%] min-w-0 flex items-center justify-center"
                    >
                        <div
                            className={`relative block h-[220px] sm:h-[300px] md:h-[400px] rounded-3xl transition-all duration-600 transform ${index === selectedIndex ? "scale-105 translate-y-24" : "translate-y-0 scale-85"
                                }`}
                        >
                            <Image
                                src={slide.image}
                                alt={`Slide ${index}`}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-auto h-[75%] object-contain"
                                priority
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
