import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

type RequestDemoButtonProps = {
    variant?: "default" | "blue"
}

function RequestDemoButton({ variant }: RequestDemoButtonProps) {
    const t = useTranslations("Home.hero");
    const locale = useLocale();
    const isRTL = locale === "ar";
    return (
        <Link href="/request-demo">
            <Button className={cn("", isRTL ? "flex-row-reverse" : "flex-row", variant === "blue" ? "bg-[#115687]! hover:bg-[#115687]/80! transition-colors duration-200" : "")}>
                <Image
                    src="/computer.png"
                    alt="monitor icon"
                    width={30}
                    height={30}
                />
                <span>{t("cta")}</span>
            </Button>
        </Link>
    );
}

export default RequestDemoButton;