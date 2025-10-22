import { Button } from "../../ui/button";
import Link from "next/link";
import SolutionsDropdown from "./SolutionsDropdown";
import NavDrawer from "./NavDrawer";


function Navbar() {
    return (
        <header className="sticky top-0 z-50 shadow-md bg-white">
            <div className="container mx-auto flex justify-between items-center p-4">
                <figure className="order-2 lg:order-1">
                    Logo
                </figure>

                {/* Navbar for desktop screens */}
                <nav className="hidden lg:inline-flex items-center space-x-4 order-2">
                    <Link href="/" className="cursor-pointer">Home</Link>
                    <SolutionsDropdown />
                    <Link href="/case-studies" className="cursor-pointer">Case Studies</Link>
                </nav>

                {/* Drawer for mobile screens */}
                <div className="block lg:hidden order-3">
                    <NavDrawer />
                </div>

                <div className="inline-flex items-center space-x-1 order-1 lg:order-3">
                    <Button className="bg-primary hidden lg:block">
                        <Link href="/request-demo">Request a Demo</Link>
                    </Button>
                    <p>change language</p>
                </div>
            </div>
        </header>
    );
}

export default Navbar;