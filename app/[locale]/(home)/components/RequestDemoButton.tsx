import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
function RequestDemoButton() {
    const t = useTranslations("Home.hero");
    const locale = useLocale();
    const isRTL = locale === "ar";
    return (
        <Link href="/request-demo">
                        <Button className={cn("", isRTL ? "flex-row-reverse" : "flex-row")}>
                            <Image
                                src="/computer.png"
                                alt="monitor icon"
                                width={30}
                                height={30}
                            />
                            <span className="capitalize">{t("cta")}</span>
                        </Button>
                    </Link>
    );
}

export default RequestDemoButton;