import { Button } from "../../ui/button";
import Link from "next/link";
import NavDrawer from "./NavDrawer";
import Image from "next/image";
import NavigationDropdown from "./NavigationDropdown";
import { solutionLinks } from "@/data/constants/links";
import SolutionNavLink from "./SolutionNavLink";
import { ArrowRight } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";


function Navbar() {
    return (
        <header className="sticky md:fixed top-0 z-50 shadow-md bg-white w-full">
            <div className="container mx-auto max-h-20 flex justify-between items-center p-4">
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
                        <ul className="max-w-4xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {solutionLinks.map((link) => (
                                <li key={link.title}>
                                    <SolutionNavLink {...link} />
                                </li>
                            ))}
                        </ul>
                    </NavigationDropdown>
                    <NavigationDropdown triggerName="By Need">
                        By need dropdown
                    </NavigationDropdown>
                    <NavigationDropdown triggerName="Resources">
                        Resources dropdown
                    </NavigationDropdown>
                    <Link href="/case-studies" className="cursor-pointer mx-2">Case Studies</Link>
                    <Link href="/about-us" className="cursor-pointer mx-2">About</Link>
                </nav>

                {/* Drawer for mobile screens */}
                <div className="block lg:hidden order-3">
                    <NavDrawer />
                </div>

                <div className="inline-flex items-center space-x-1 order-1 lg:order-3">
                    <Button className="bg-[#2C2C2C] hidden lg:flex items-center rounded-full py-5 shadow-">
                        <Link href="/request-demo">Request a Demo</Link>
                        <div className="w-6 h-6 rounded-full bg-white flex justify-center items-center">
                            <ArrowRight color="black" />
                        </div>
                    </Button>

                    {/* Language Switcher */}
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    );
}

export default Navbar;