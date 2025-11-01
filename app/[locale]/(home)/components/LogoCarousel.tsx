"use client";


import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";



export default function LogoCarousel() {
    const autoScrollPlugin = AutoScroll({ speed: 1, stopOnInteraction: false });

    return (
        <Carousel
            opts={{
                loop: true,
                dragFree: true,
                align: "start",
            }}
            plugins={[autoScrollPlugin]}
            className="w-full overflow-hidden my-4"
        >
            <CarouselContent className="flex items-center gap-12 sm:gap-16 md:gap-20">
                {Array.from({ length: 14 }).map((_, index) => (
                    <CarouselItem
                        key={index}
                        className="flex-none basis-[30%] sm:basis-[20%] md:basis-[12%] lg:basis-[10%]"
                    >
                        <div className="flex items-center justify-center h-[80px] sm:h-[100px] md:h-[120px]">
                            <Image
                                src={`/logo-slider/${index + 1}.png`}
                                alt={`Logo ${index}`}
                                width={200}
                                height={100}
                                className="object-contain w-auto h-full"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
