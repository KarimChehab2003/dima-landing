import { footerLinks } from "@/data/constants/links";
import Link from "next/link";
import { PiArrowBendDownRightLight } from "react-icons/pi";

function FooterLinks() {
    return (
        <div className="grid grid-cols-2 gap-8">
            <p className="inline-flex">
                <PiArrowBendDownRightLight size={18} />
                <span className="ms-1">Pages</span>
            </p>
            <ul className="space-y-1">
                {footerLinks.map(link => (
                    <li key={link.href} className="hover:text-primary transition-colors duration-200 cursor-pointer">
                        <Link href={link.href}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FooterLinks;