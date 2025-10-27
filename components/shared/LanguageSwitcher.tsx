"use client";

import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Link, usePathname } from "@/i18n/navigation";
import { languages } from "@/data/constants/links";
import { LanguageLink } from "@/types/link";



export default function LanguageSwitcher() {
    const pathname = usePathname();
    const currentLocale =
        pathname.startsWith("/ar") || pathname.includes("/ar") ? "ar" : "en";

    const [open, setOpen] = useState<boolean>(false);
    const [currentLanguage, setCurrentLanguage] = useState<LanguageLink | undefined>(
        languages.find((l) => l.locale === currentLocale)
    );

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    role="combobox"
                    aria-expanded={open}
                    className="flex justify-between"
                >
                    <span className="flex items-center gap-2">
                        <span className="text-lg">{currentLanguage?.flag}</span>
                        {currentLanguage ? currentLanguage.label : "Select language"}
                    </span>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-[180px] p-0">
                <Command>
                    <CommandInput placeholder="Search language..." />
                    <CommandEmpty>No language found.</CommandEmpty>
                    <CommandGroup>
                        {languages.map((lang) => (
                            <CommandItem
                                key={lang.locale}
                                value={lang.label}
                                onSelect={(currentLabel) => {
                                    const selected = languages.find(
                                        (l) => l.label === currentLabel
                                    );
                                    if (selected) {
                                        setCurrentLanguage(selected);
                                        setOpen(false);
                                    }
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        currentLanguage?.label === lang.label ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                <Link
                                    href={pathname}
                                    locale={lang.locale}
                                    className="flex items-center gap-2 flex-1"
                                >
                                    <span className="text-lg">{lang.flag}</span>
                                    {lang.label}
                                </Link>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
