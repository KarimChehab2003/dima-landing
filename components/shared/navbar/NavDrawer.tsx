"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { blogsLinks, resourcesLinks, dimaSolutions } from "@/data/constants/links";
import SolutionNavLink from "./SolutionNavLink";
import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher";
import { useLocale, useTranslations } from "next-intl";

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

            <DrawerContent >
                <DrawerTitle className="hidden">Navigation Drawer</DrawerTitle>

                <div className="flex flex-col justify-between h-full">
                    <nav className="p-4 space-y-4 overflow-y-auto max-h-screen">
                        {/* Home Link */}
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className={`block text-base font-medium hover:text-sky-500 transition ${isRTL ? "text-right" : "text-left"}`}
                        >
                            {t("home")}
                        </Link>

                        {/* Solutions Accordion */}
                        <Accordion type="single" collapsible>
                            <AccordionItem value="solutions">
                                <AccordionTrigger className={isRTL ? "flex-row-reverse" : "flex-row"}>
                                    {t("solutions.title")}
                                </AccordionTrigger>
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
                                <AccordionTrigger className={isRTL ? "flex-row-reverse" : "flex-row"}>
                                    {t("resources.links.blogs.title")}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul className="space-y-4 p-3">
                                        {blogsLinks.map((link) => (
                                            <li key={link.title}>
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`block text-sm text-muted-foreground hover:text-sky-500 transition ${isRTL ? 'text-right' : 'text-left'}`}
                                                >
                                                    {link.titleKey ? t(link.titleKey) : link.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        {/* Resources Accordion */}
                        <Accordion type="single" collapsible>
                            <AccordionItem value="resources">
                                <AccordionTrigger className={isRTL ? "flex-row-reverse" : "flex-row"}>
                                    {t("resources.links.moreResources.title")}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul className="space-y-4 p-3">
                                        {resourcesLinks.map((link) => (
                                            <li key={link.title}>
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`flex items-center gap-2 text-sm text-muted-foreground hover:text-sky-500 transition ${isRTL ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}
                                                >
                                                    {link.icon && (
                                                        <Image
                                                            src={link.icon}
                                                            alt={link.title}
                                                            width={18}
                                                            height={18}
                                                        />
                                                    )}
                                                    {link.titleKey ? t(link.titleKey) : link.title}
                                                </Link>
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
                            className={`block text-base font-medium hover:text-sky-500 transition ${isRTL ? "text-right" : "text-left"}`}
                        >
                            {t("caseStudies")}
                        </Link>
                        <LanguageSwitcher />
                    </nav>

                </div>
            </DrawerContent>
        </Drawer>
    );
}

export default NavDrawer;
