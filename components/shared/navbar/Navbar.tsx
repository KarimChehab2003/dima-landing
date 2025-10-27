import { Button } from "../../ui/button";
import Link from "next/link";
import NavDrawer from "./NavDrawer";
import Image from "next/image";
import NavigationDropdown from "./NavigationDropdown";
import { ArrowRight } from "lucide-react";
import SolutionsDropdown from "./dropdowns/SolutionsDropdown";
import ByNeedDropdown from "./dropdowns/ByNeedDropdown";
import ResourcesDropdown from "./dropdowns/ResourcesDropdown";
import LanguageSwitcher from "../LanguageSwitcher";


function Navbar() {
    return (
        <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 shadow-[0_0_15px_rgba(0,0,0,0.12)] bg-white mt-4 rounded-full container">
            <div className="mx-auto max-h-20 flex justify-between items-center p-4">
                <Link href="/" className="order-2 lg:order-1">
                    <figure className="relative w-20 h-20  overflow-hidden">
                        <Image
                            src="/dima-logo.svg"
                            alt="Dima logo"
                            fill
                            className="object-cover"
                            priority
                        />
                    </figure>
                </Link>

                {/* Navbar for desktop screens */}
                <nav className="hidden lg:inline-flex items-center order-2">
                    <NavigationDropdown triggerName="Solutions">
                        <SolutionsDropdown />
                    </NavigationDropdown>
                    <NavigationDropdown triggerName="By Need">
                        <ByNeedDropdown />
                    </NavigationDropdown>
                    <NavigationDropdown triggerName="Resources">
                        <ResourcesDropdown />
                    </NavigationDropdown>
                    <Link href="/case-studies" className="cursor-pointer mx-2">Case Studies</Link>
                    <Link href="/about-us" className="cursor-pointer mx-2">About</Link>
                </nav>

                {/* Drawer for mobile screens */}
                <div className="block lg:hidden order-3">
                    <NavDrawer />
                </div>

                <div className="inline-flex items-center space-x-1 order-1 lg:order-3">
                    <LanguageSwitcher />
                    <Button className="bg-[#2C2C2C] hidden lg:flex items-center rounded-full py-5 shadow-">
                        <Link href="/request-demo">Request a Demo</Link>
                        <div className="w-6 h-6 rounded-full bg-white flex justify-center items-center">
                            <ArrowRight color="black" />
                        </div>
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;