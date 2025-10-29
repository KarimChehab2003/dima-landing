import { dimaSolutions } from "@/data/constants/links";
import SolutionNavLink from "../SolutionNavLink";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

function SolutionsDropdown() {
    const t = useTranslations("Navbar");
    return (
        <div className="flex flex-col space-y-4">
            {/* Header */}
            <div>
                <h2 className="text-3xl font-semibold">{t("solutions.title")}</h2>
                <div className="w-8 h-0.5 bg-primary mb-4"></div>
            </div>

            <div className="flex justify-center items-center space-y-4">
                {/* Customer Insights */}
                <Link href="/solutions/consumer-insights" className="flex justify-center items-center gap-4 ">
                    <figure className="flex justify-center items-center">
                        <Image
                            src="/nav-links/ci-desktop.png"
                            alt="customer insights"
                            width={200}
                            height={200}
                        />
                    </figure>
                    <div>
                        <p className="font-semibold hover:underline">{t("solutions.links.consumerInsights.title")}</p>
                        <p className="text-muted-foreground text-xs">{t("solutions.links.consumerInsights.description")}</p>
                    </div>
                </Link>

                {/* Links list */}
                <ul className="max-w-4xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {dimaSolutions
                        .filter((s) => s.href !== "/solutions/consumer-insights")
                        .map((link) => (
                            <li key={link.title}>
                                <SolutionNavLink {...link} />
                            </li>
                        ))}
                </ul>
            </div>

            {/* <Button className="py-3 px-6 rounded-sm! bg-primary! w-fit">Dima AI</Button> */}
        </div>
    );
}

export default SolutionsDropdown;