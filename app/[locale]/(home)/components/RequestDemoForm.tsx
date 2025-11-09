"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useLocale, useTranslations } from "use-intl";

function RequestDemoForm() {
    const t = useTranslations("Home.requestDemo");
    const locale = useLocale();
    const isRTL = locale === "ar";
    return (
        <form className="space-y-6 rounded-2xl p-8 bg-white h-full flex flex-col justify-between">
            <div className="grid w-full items-center gap-3">
                <Label
                    htmlFor="formNameInput"
                    className={isRTL ? "text-right " : ""}
                >
                    {t("form.name.title")}
                </Label>
                <Input
                    type="text"
                    id="formNameInput"
                    name="name"
                    placeholder={t("form.name.placeholder")}
                    className={`text-sm ${isRTL ? "text-right" : ""}`}
                />
            </div>
            <div className="grid w-full items-center gap-3">
                <Label
                    htmlFor="formEmailInput"
                    className={isRTL ? "text-right " : ""}
                >
                    {t("form.email.title")}
                </Label>
                <Input
                    type="email"
                    id="formEmailInput"
                    name="email"
                    placeholder={t("form.email.placeholder")}
                    className={`text-sm ${isRTL ? "text-right" : ""}`} />
            </div>
            <div className="grid w-full items-center gap-3">
                <Label
                    htmlFor="formPhoneNumInput"
                    className={isRTL ? "text-right " : ""}
                >
                    {t("form.phoneNumber.title")}
                </Label>
                <Input
                    type="text"
                    id="formPhoneNumInput"
                    name="phoneNum"
                    placeholder={t("form.phoneNumber.placeholder")}
                    className={`text-sm ${isRTL ? "text-right" : ""}`} />
            </div>
            <div className="grid w-full items-center gap-3">
                <Label
                    htmlFor="formCompanyInput"
                    className={`text-sm  ${isRTL ? "text-right" : ""}`}
                >
                    {t("form.companyName.title")}
                </Label>
                <Input
                    type="text"
                    id="formCompanyInput"
                    name="company"
                    placeholder={t("form.companyName.placeholder")}
                    className={`text-sm ${isRTL ? "text-right" : ""}`}
                />
            </div>

            <div className="flex justify-center items-center">
                <Button className="bg-linear-to-r from-black to-[#6D6D6D] hover:scale-102 w-full max-w-xs" >
                    {t("form.submit")}
                </Button>
            </div>
        </form>
    );
}

export default RequestDemoForm;