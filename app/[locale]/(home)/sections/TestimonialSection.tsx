"use client";
import { useEffect, useState } from "react";
import SectionWrapper from "../../../../components/shared/SectionWrapper";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { useTranslations } from "next-intl";
import { TestimonialType } from "@/types/info";
import { testimonialsInfo } from "@/data/constants/info";

export default function TestimonialSection() {
  const t = useTranslations("Home.testimonials");
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 768) setSlidesToShow(1);
      else if (width <= 1024) setSlidesToShow(3);
      else setSlidesToShow(5);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    setMounted(true);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <SectionWrapper className="px-0 lg:px-6">
      <div className="container mx-auto">
        <h2 className="text-[24px] lg:text-[44px] font-normal text-center mb-8">
          {t("title")}
        </h2>
        <TestimonialCarousel
          slidesToShow={slidesToShow}
          setSlidesToShow={setSlidesToShow}
          items={testimonialsInfo}
        />
      </div>
    </SectionWrapper>
  );
}
