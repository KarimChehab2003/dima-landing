import { NavLinkType } from "@/types/link";
import Link from "next/link";

type LinksListProps = {
    title: string;
    links: NavLinkType[]
}

function LinksList({ title, links }: LinksListProps) {
    return (
        <ul className="space-y-3">
            <li className="font-semibold mt-4">{title}</li>
            {links.map((link) => (
                <li key={link.href}>
                    <Link href={link.href} className="hover:underline">{link.title}</Link>
                </li>
            ))}
        </ul>
    );
}

export default LinksList;