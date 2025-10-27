
import { Button } from "@/components/ui/button";

import FooterLinks from "./FooterLinks";
import SocialMediaLinks from "./SocialMediaLinks";
import LanguageSwitcher from "./LanguageSwitcher";

function Footer() {
    return (
        <footer
            className="bg-cover bg-center bg-no-repeat text-white p-8 rounded-t-4xl overflow-hidden relative"
            style={{ backgroundImage: "url('/footer-background.svg')" }}
        >

            {/* Dimming background */}
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative container mx-auto z-10">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="grow">
                        {/* Newsletter */}
                        <h2 className="text-2xl md:text-3xl font-medium mb-3">Sign up for our newsletter</h2>
                        <div className="p-1 bg-muted-foreground group rounded-full inline-flex items-center text-lg max-w-lg w-full focus-within:ring-3 focus-within:ring-ring transition">
                            <input
                                type="email"
                                placeholder="name@gmail.com"
                                className="outline-0 ms-4 placeholder:text-white w-full"
                            />
                            <Button className="rounded-full text-white border-0 outline-0 ring-0">Subscribe</Button>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="my-4">
                        <FooterLinks />
                    </div>
                </div>


                <div className="mt-8">
                    {/* Social Media Links */}
                    <div className="w-full flex justify-center lg:justify-start">
                        <SocialMediaLinks />
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between items-center mt-2 w-full">
                        <p className="text-5xl text-primary my-4">hello@dima.sa</p>
                        <div>
                            <span className="mx-1">copyrights@dima.ai</span>
                            <span className="mx-1">• All rights reserved</span>
                        </div>
                        {/* Language Switcher */}
                        <LanguageSwitcher />
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;