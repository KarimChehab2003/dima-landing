import { Link } from "@/i18n/navigation";
import { NavLink, SolutionLink } from "@/types/link";

type FooterLinksProps = {
    title: string;
    links: (NavLink | SolutionLink)[]
}

function FooterLinks({ title, links }: FooterLinksProps) {
    return (
        <div>
            <h3 className="text-xl font-medium mb-4">{title}</h3>
            <ul className="space-y-1">
                {links.map(link => (
                    <li key={link.href} className="hover:text-primary transition-colors duration-200 cursor-pointer my-2">
                        <Link className="font-light" href={link.href}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FooterLinks;