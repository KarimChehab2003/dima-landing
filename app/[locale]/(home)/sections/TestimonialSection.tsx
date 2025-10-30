"use client";
import { useEffect, useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { useTranslations } from "next-intl";
import { TestimonialType } from "@/types/info";
import { testimonialsInfo } from "@/data/constants/info";

export default function TestimonialSection() {
  const t = useTranslations("Home.testimonials");
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [mounted, setMounted] = useState(false);

  // TODO: Extract this logic into a hook to reuse it in hero section

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
        {/* Title typography: mobile 24px, desktop 44px; weight 400 */}
        <h2 className="text-[24px] lg:text-[44px] font-normal text-center mb-8">
          {t("title")}
        </h2>
        <TestimonialCarousel
          slidesToShow={slidesToShow}
          setSlidesToShow={setSlidesToShow}
          items={[0, 1, 2, 3, 4].map(
            (i) =>
              ({
                quote: t(`items.${i}.quote`),
                name: t(`items.${i}.name`),
                jobRole: t(`items.${i}.jobRole`),
                companyLogo: testimonialsInfo[i].companyLogo,
              } as TestimonialType)
          )}
        />
      </div>
    </SectionWrapper>
  );
}
