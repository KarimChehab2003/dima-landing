import { LucideMonitor } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslations, useLocale } from "next-intl";
import RequestDemoButton from "../components/RequestDemoButton";

function DimaAiSection() {
  const t = useTranslations("Home.dimaAi");
  const locale = useLocale();
  const isRTL = locale === "ar";
  return (
    <SectionWrapper>
      <div className="container mx-auto p-6 sm:px-24  text-white rounded-4xl lg:rounded-[64px] bg-[#043558]">
        <div className={`flex flex-col lg:flex-row justify-between items-center gap-4 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text Section */}
          <div className={`flex-1 space-y-6 text-left ${isRTL ? 'lg:text-right' : ''}`}>
            <p className="text-sm  mb-4">{t("badge")}</p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#95DDEE] leading-tight">
              {t("title")}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {t("description")}
            </p>
            <RequestDemoButton variant="blue" />
          </div>

          {/* Image Section */}
          <figure className={`relative w-full lg:flex-1 h-[220px] sm:h-[300px] lg:h-[500px]`}>
            <Image
              src="/dima-phone.png"
              alt="stats"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
              priority
            />
          </figure>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default DimaAiSection;
