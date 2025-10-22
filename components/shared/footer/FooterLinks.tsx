import { getInTouchLinks, resourceLinks, solutionLinks } from "@/data/constants/links";
import LinksList from "./LinksList";

function FooterLinks() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 lg:px-8">
            <LinksList title="Solutions" links={solutionLinks} />
            <LinksList title="Resources" links={resourceLinks} />
            <LinksList title="Get In Touch" links={getInTouchLinks} />
        </div>
    );
}

export default FooterLinks;