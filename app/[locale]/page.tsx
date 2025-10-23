import { useTranslations } from "next-intl";

function HomePage() {
  const t = useTranslations("Home");
  return (
    <main className="h-full capitalize">
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </main>
  );
}

export default HomePage;