import { Monitor } from "lucide-react";
import { Button } from "../../ui/button";
import FooterLinks from "./FooterLinks";
import Link from "next/link";

function Footer() {
    return (
        <footer className="bg-sky-400 text-white p-8">
            <div className="flex flex-col md:flex-row lg:justify-between lg:items-center space-x-4 lg:px-4">
                <div className="space-y-4">
                    <figure>
                        dima
                    </figure>
                    <p>Your AI Copilot</p>
                    <Button>
                        <Monitor />
                        <Link href="/request-demo">Request a Demo</Link>
                    </Button>
                </div>

                <FooterLinks />

                <div>LinkedIn</div>
            </div>
            <div className="h-0.5 bg-white w-full my-4"></div>
            <p className="text-gray-500">© 2025 darwinz dima, Inc. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;