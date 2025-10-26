import { useTranslations } from "next-intl";

function AboutUsPage() {
    const t = useTranslations("About");
    return (
        <main>
            {t("title")}
        </main>
    );
}

export default AboutUsPage;