"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Drawer,
    DrawerContent,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { blogsLinks, resourcesLinks, dimaSolutions } from "@/data/constants/links";
import SolutionNavLink from "./SolutionNavLink";
import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

function NavDrawer() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const t = useTranslations("Navbar");
    const locale = useLocale();
    const isRTL = locale === "ar";

    return (
        <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
                <Menu />
            </DrawerTrigger>

            <DrawerContent>
                <DrawerTitle className="hidden">Navigation Drawer</DrawerTitle>

                <div className="flex flex-col justify-between h-full">
                    <nav className="p-4 space-y-4 overflow-y-auto max-h-screen">
                        {/* Home Link */}
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="block text-base font-medium hover:text-primary transition"
                        >
                            {t("home")}
                        </Link>

                        {/* Solutions Accordion */}
                        <Accordion type="single" collapsible>
                            <AccordionItem value="solutions">
                                <AccordionTrigger>{t("solutions.title")}</AccordionTrigger>
                                <AccordionContent>
                                    <ul className="space-y-2 pl-3">
                                        {dimaSolutions.map((link) => (
                                            <li key={link.title} onClick={() => setIsOpen(false)}>
                                                <SolutionNavLink {...link} isRTL={isRTL} />
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        {/* Blogs Accordion */}
                        <Accordion type="single" collapsible>
                            <AccordionItem value="blogs">
                                <AccordionTrigger>
                                    {t("resources.links.blogs.title")}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul className="space-y-4 p-3">
                                        {blogsLinks.map((link, i) => (
                                            <li key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`block text-sm text-muted-foreground hover:text-primary transition ${isRTL ? "text-right" : "text-left"
                                                        }`}
                                                >
                                                    {t(`resources.links.blogs.blog${i + 1}`)}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button className="mt-4" size={"xl"}>
                                        <Link href="/blogs">{t("resources.links.blogs.viewAllBlogs")}</Link>
                                    </Button>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        {/* Resources Accordion */}
                        <Accordion type="single" collapsible>
                            <AccordionItem value="resources">
                                <AccordionTrigger>
                                    {t("resources.links.moreResources.title")}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul className="space-y-4 p-3">
                                        {resourcesLinks.map((link) => (
                                            <li key={link.href} className="flex items-center space-x-2">
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition ${isRTL ? "text-right" : "text-left"
                                                        }`}
                                                >
                                                    {link.icon && (
                                                        <Image
                                                            src={link.icon}
                                                            alt={link.title}
                                                            width={18}
                                                            height={18}
                                                        />
                                                    )}
                                                    {t(`resources.links.moreResources.${link.translationKey}.title`)}
                                                </Link>
                                                <span className="text-primary text-xs">{t(`resources.links.moreResources.${link.translationKey}.comingSoon`)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        {/* Case Studies */}
                        <Link
                            href="/case-studies"
                            onClick={() => setIsOpen(false)}
                            className="block text-base font-medium hover:text-primary transition"
                        >
                            {t("caseStudies")}
                        </Link>

                        <Button >
                            <Link href="/request-demo" className="text-[15px]">{t("requestDemo")}</Link>
                            <div className="w-6 h-6 rounded-full bg-white flex justify-center items-center">
                                <ArrowRight color="black" />
                            </div>
                        </Button>
                    </nav>
                </div>
            </DrawerContent>
        </Drawer>
    );
}

export default NavDrawer;
