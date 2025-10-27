import { Button } from "@/components/ui/button";
import { blogsLinks, resourcesLinks } from "@/data/constants/links";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

function ResourcesDropdown() {
    return (
        <div className="flex justify-between items-center">
            <div className="flex-1 flex justify-center items-start gap-8">
                {/* Blogs Section */}
                <div>
                    <h2 className="text-3xl font-semibold">Blogs</h2>
                    <div className="w-8 h-0.5 bg-primary mb-4"></div>
                    <ul className="grid grid-cols-1 gap-x-8 gap-y-4">
                        {blogsLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <Button className="bg-primary! mt-4 rounded-md px-6 py-4">
                        <Link href="/blogs">View all blogs</Link>
                    </Button>
                </div>

                {/* Vertical Separator */}
                <div className="w-px h-40 bg-gray-300"></div>

                {/* More Resources Section */}
                <div>
                    <h2 className="text-3xl font-semibold">More Resources</h2>
                    <div className="w-8 h-0.5 bg-primary mb-4"></div>
                    <ul className="grid grid-cols-1 gap-y-4 gap-x-8">
                        {resourcesLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <figure className="flex-1 flex justify-center items-center">
                <Image
                    src="/analyze-data.png"
                    alt="moon image"
                    width={331}
                    height={331}
                />
            </figure>
        </div>
    );
}

export default ResourcesDropdown;