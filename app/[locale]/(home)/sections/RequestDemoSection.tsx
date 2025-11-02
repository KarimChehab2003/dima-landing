import SectionWrapper from "../components/SectionWrapper";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

function RequestDemoSection() {
  const t = useTranslations("Home.requestDemo");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <SectionWrapper>
      <div className="container mx-auto max-w-7xl flex flex-col gap-8">
        {/* Heading */}
        <h2 className="text-[24px] lg:text-[44px] font-normal text-center">
          {t("title")}
        </h2>

        {/* Description */}
        <p className="text-base lg:text-[24px] font-light text-center lg:max-w-xl mx-auto">
          {t("description")}
        </p>
        <div className={`flex justify-between items-stretch gap-6  ${isRTL ? "flex-row-reverse" : ""}`}>
          <div className="lg:basis-3/5 basis-5/5 bg-[linear-gradient(90deg,#95DDEE_0%,#11A8CF_32%,#95DDEE_46%,#11A8CF_100%)] p-5 rounded-4xl min-h-[600px]">

          </div>

          {/* Phone Image */}
          <figure className="lg:basis-2/5 hidden lg:flex justify-center items-center bg-[linear-gradient(90deg,#95DDEE_0%,#11A8CF_32%,#95DDEE_46%,#11A8CF_100%)] rounded-4xl flex-1">
            <Image
              src="/dima-phone.png"
              alt="dima phone"
              width={400}
              height={500}
            />
          </figure>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default RequestDemoSection;
