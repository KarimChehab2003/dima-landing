import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaDisplay } from "react-icons/fa6";
import FooterLinks from "./FooterLinks";
import { dimaSolutions, footerResourcesLinks } from "@/data/constants/links";
import SocialMediaLinks from "./SocialMediaLinks";
import LanguageSwitcher from "../LanguageSwitcher";
import { Link } from "@/i18n/navigation";

function Footer() {
    return (
        <footer className="bg-[#2C2C2C] text-white rounded-t-[64px]">
            <div className="container mx-auto flex flex-col px-6 py-12 space-y-8">
                {/* Dima & Footer Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col gap-4">
                        <figure>
                            <Image
                                src="/dima-logo-white.png"
                                alt="dima logo white"
                                width={120}
                                height={50}
                            />
                        </figure>
                        <h2 className="capitalize text-2xl ">your media monitoring AI copilot</h2>
                        <div>
                            <Button
                                size="lg"
                                className="flex items-center gap-2 bg-white! hover:bg-white/90! transition-colors duration-200 text-black!"
                            >
                                <FaDisplay className="size-5" />
                                <span>Request a demo</span>
                            </Button>
                        </div>
                    </div>

                    <FooterLinks title="Solutions" links={dimaSolutions} />
                    <FooterLinks title="Resources" links={footerResourcesLinks} />
                    <FooterLinks
                        title="Get in Touch"
                        links={[{ title: "info@darwinz.ai", href: "mailto:info@darwinz.ai" }]}
                    />
                </div>

                {/* Social Media */}
                <div className="w-full flex justify-center lg:justify-end">
                    <SocialMediaLinks />
                </div>

                {/* Separator */}
                <div className="h-px w-full bg-white/20"></div>

                {/* Language Switch & Copyright */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
                    <LanguageSwitcher />
                    <p className="text-gray-300">© The Dar.AI. All Rights Reserved.</p>
                    <Link
                        href="/privacy-policy"
                        className="hover:text-primary transition-colors duration-200"
                    >
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
