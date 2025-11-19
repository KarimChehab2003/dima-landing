"use client";
import { useEffect, useState } from "react";
import SectionWrapper from "../../../../components/shared/SectionWrapper";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { useTranslations } from "next-intl";
import { testimonialsInfo } from "@/data/constants/info";

export default function TestimonialSection() {
  const t = useTranslations("Home.testimonials");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <SectionWrapper className="px-0 lg:px-6">
      <div className="container mx-auto">
        <h2 className="text-[24px] lg:text-[44px] font-normal text-center mb-8">
          {t("title")}
        </h2>
        <TestimonialCarousel
          items={testimonialsInfo}
        />
      </div>
    </SectionWrapper>
  );
}
