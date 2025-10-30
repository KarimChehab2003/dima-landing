import { Label } from "@/components/ui/label";
import SectionWrapper from "../components/SectionWrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

function RequestDemoSection() {
    const t = useTranslations('Home.requestDemo');
    const locale = useLocale();
    const isRTL = locale === 'ar';

    return (
        <SectionWrapper>
            <div className="container mx-auto max-w-5xl flex flex-col gap-4">
                <h2 className="text-4xl sm:text-5xl text-center">{t('title')}</h2>
                <p className="text-xl text-muted-foreground font-medium text-center">{t('description')}</p>
                <div className={`flex justify-between items-stretch gap-6  ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="lg:basis-3/5 basis-5/5 bg-[linear-gradient(90deg,#95DDEE_0%,#11A8CF_32%,#95DDEE_46%,#11A8CF_100%)] p-5 rounded-4xl h-full">
                        <form className="space-y-6 rounded-2xl p-8 bg-white h-full flex flex-col">
                            <div className="grid w-full items-center gap-3">
                                <Label htmlFor="formNameInput" className={isRTL ? 'text-right justify-end' : ''}>{t('form.name.title')}</Label>
                                <Input
                                    type="text"
                                    id="formNameInput"
                                    name="name"
                                    placeholder={t('form.name.placeholder')}
                                    className={isRTL ? 'text-right' : ''}
                                />
                            </div>
                            <div className="grid w-full items-center gap-3">
                                <Label htmlFor="formEmailInput" className={isRTL ? 'text-right justify-end' : ''}>{t('form.email.title')}</Label>
                                <Input
                                    type="email"
                                    id="formEmailInput"
                                    name="email"
                                    placeholder={t('form.email.placeholder')}
                                    className={isRTL ? 'text-right' : ''}
                                />
                            </div>
                            <div className="grid w-full items-center gap-3">
                                <Label htmlFor="formPhoneNumInput" className={isRTL ? 'text-right justify-end' : ''}>{t('form.phoneNumber.title')}</Label>
                                <Input
                                    type="text"
                                    id="formPhoneNumInput"
                                    name="phoneNum"
                                    placeholder={t('form.phoneNumber.placeholder')}
                                    className={isRTL ? 'text-right' : ''}
                                />
                            </div>
                            <div className="grid w-full items-center gap-3">
                                <Label htmlFor="formCompanyInput" className={isRTL ? 'text-right justify-end' : ''}>{t('form.companyName.title')}</Label>
                                <Input
                                    type="text"
                                    id="formCompanyInput"
                                    name="company"
                                    placeholder={t('form.companyName.placeholder')}
                                    className={isRTL ? 'text-right justify-end' : ''}
                                />
                            </div>

                            <div className="flex justify-center items-center">
                                <Button className="bg-linear-to-r from-black to-[#6D6D6D] w-full max-w-xs py-5">
                                    {t('form.submit')}
                                </Button>
                            </div>
                        </form>
                    </div>
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