import { socialMediaLinks } from "@/data/constants/links";

function SocialMediaLinks() {
    return (
        <ul className="inline-flex items-center">
            {socialMediaLinks.map(link => (
                <li key={link.href} className="bg-muted-foreground hover:bg-muted-foreground/90 transition-colors duration-200 p-2 rounded-full cursor-pointer mx-1">
                    <a href={link.href} target="_blank">
                        <link.icon size={18} />
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default SocialMediaLinks;