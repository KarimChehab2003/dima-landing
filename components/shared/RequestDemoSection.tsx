import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import SectionWrapper from "./SectionWrapper";
import RequestDemoForm from "@/app/[locale]/(home)/components/RequestDemoForm";

function RequestDemoSection() {
  const t = useTranslations("Home.requestDemo");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <SectionWrapper>
      <div className="container mx-auto max-w-7xl flex flex-col gap-8">
        {/* Heading */}
        <h2 className="text-[24px] lg:text-[44px] font-normal text-center capitalize">
          {t("title")}
        </h2>

        {/* Description */}
        <p className="text-base lg:text-[24px] font-light text-center lg:max-w-xl mx-auto">
          {t("description")}
        </p>
        <div className={`flex justify-between items-stretch gap-6  ${isRTL ? "flex-row-reverse" : ""}`}>
          <div className="lg:basis-3/5 basis-5/5 bg-[linear-gradient(90deg,#95DDEE_0%,#11A8CF_32%,#95DDEE_46%,#11A8CF_100%)] p-2 lg:p-5 lg:rounded-4xl rounded-4xl min-h-[600px]">
            {/* Form */}
            <RequestDemoForm />
          </div>

          {/* Phone Image */}
          <figure className="lg:basis-2/5 hidden lg:flex justify-center items-center bg-[linear-gradient(90deg,#95DDEE_0%,#11A8CF_32%,#95DDEE_46%,#11A8CF_100%)] rounded-4xl flex-1">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/HomePage%2Fdima-phone.svg?alt=media&token=1e69d363-9700-4b5f-8226-228f82c5c0a6"
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
