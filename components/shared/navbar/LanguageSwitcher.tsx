"use client";
import { Link } from "@/i18n/navigation";
import { usePathname } from "@/i18n/navigation";

function LanguageSwitcher() {
    const pathname = usePathname();
    return (
        <div className="flex gap-3 mx-2">
            <Link href={pathname} locale="en">English</Link>
            <Link href={pathname} locale="ar">العربية</Link>
        </div>
    );
}

export default LanguageSwitcher;