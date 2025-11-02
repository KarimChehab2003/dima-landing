import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

type RequestDemoButtonProps = {
  className?: string;
  computerVariant?: "black" | "white";
};

function RequestDemoButton({
  className,
  computerVariant = "white",
}: RequestDemoButtonProps) {
  const t = useTranslations("Home.hero");
  const locale = useLocale();
  const isRTL = locale === "ar";
  return (
    <Link href="/request-demo">
      <Button
        className={cn(isRTL ? "flex-row-reverse" : "flex-row", className)}
      >
        <Image
          src={
            computerVariant === "white"
              ? "/computer.png"
              : "/computer-black.png"
          }
          alt="monitor icon"
          width={30}
          height={30}
        />
        <span className="uppercase">{t("cta")}</span>
      </Button>
    </Link>
  );
}

export default RequestDemoButton;
