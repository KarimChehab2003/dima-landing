import { Button } from "../../ui/button";
import Link from "next/link";
import NavDrawer from "./NavDrawer";
import Image from "next/image";
import NavigationDropdown from "./NavigationDropdown";
import { ArrowRight } from "lucide-react";
import SolutionsDropdown from "./dropdowns/SolutionsDropdown";
import ResourcesDropdown from "./dropdowns/ResourcesDropdown";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslations } from "next-intl";


function Navbar() {
    const t = useTranslations("Navbar");
    return (
        <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 shadow-[0_0_15px_rgba(0,0,0,0.12)] bg-white md:mt-4 md:rounded-full container">
            <div className="max-h-20 flex justify-between items-center p-4 md:mx-8">
                <Link href="/" className="order-1">
                    <figure>
                        <Image
                            src="/dima-logo.png"
                            alt="Dima logo"
                            width={74}
                            height={30}
                        />
                    </figure>
                </Link>

                {/* Navbar for desktop screens */}
                <nav className="hidden lg:inline-flex items-center order-2">
                    <Link href="/" className="cursor-pointer mx-2 group relative">
                        <span>{t("home")}</span>
                        <div className="h-0.5 w-0 bg-primary group-hover:w-4 transition-all duration-200 absolute -bottom-0.5 left-1/2 -translate-x-1/2"></div>
                    </Link>
                    <NavigationDropdown triggerName={t("solutions.title")}>
                        <SolutionsDropdown />
                    </NavigationDropdown>
                    {/* <NavigationDropdown triggerName="By Need">
                        <ByNeedDropdown />
                    </NavigationDropdown> */}
                    <NavigationDropdown triggerName={t("resources.title")}>
                        <ResourcesDropdown />
                    </NavigationDropdown>
                    <Link href="/case-studies" className="cursor-pointer mx-2 group relative">
                        <span>{t("resources.caseStudies")}</span>
                        <div className="h-0.5 w-0 bg-primary group-hover:w-4 transition-all duration-200 absolute -bottom-0.5 left-1/2 -translate-x-1/2"></div>
                    </Link>
                </nav>

                {/* Drawer for mobile screens */}
                <div className="inline-flex items-center gap-4 order-3">
                    <div className="block lg:hidden order-3">
                        <NavDrawer />
                    </div>

                    <div className="inline-flex items-center gap-2 order-1 lg:order-3">
                        <div className="hidden lg:flex">
                            <LanguageSwitcher />
                        </div>
                        <Button className="bg-[#2C2C2C] flex items-center rounded-full py-5 shadow-">
                            <Link href="/request-demo">{t("requestDemo")}</Link>
                            <div className="w-6 h-6 rounded-full bg-white flex justify-center items-center">
                                <ArrowRight color="black" />
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;