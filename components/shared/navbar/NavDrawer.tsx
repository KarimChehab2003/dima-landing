"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { solutionLinks } from "@/data/constants/links";
import Link from "next/link";
import SolutionNavLink from "./SolutionNavLink";
import { Menu } from "lucide-react";
import { useState } from "react";

function NavDrawer() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (

        <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
                <Menu />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerTitle className="hidden">Navigation Drawer</DrawerTitle>
                {/* Content */}
                <div className="flex flex-col justify-between h-full">
                    <nav className="p-4">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}>Home</Link>
                        {/* Accordion Solution */}
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-base">
                                    Solutions
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul>
                                        {
                                            solutionLinks.map((link) => (
                                                <li key={link.title} onClick={() => setIsOpen(false)}>
                                                    <SolutionNavLink {...link} />
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Link
                            href="/case-studies"
                            onClick={() => setIsOpen(false)}>Case Studies</Link>
                    </nav>
                    <div className="bg-sky-500">
                        LinkedIn
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}

export default NavDrawer;