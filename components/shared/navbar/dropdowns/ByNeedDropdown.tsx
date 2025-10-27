import { byCompanyLinks, byRoleLinks } from "@/data/constants/links";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

function ByNeedDropdown() {
    return (
        <div className="flex justify-between items-center">
            <div className="flex-1 flex justify-center items-start gap-8">
                {/* By Role Section */}
                <div>
                    <h2 className="text-3xl font-semibold">By Role</h2>
                    <div className="w-8 h-0.5 bg-primary mb-4"></div>
                    <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                        {byRoleLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Vertical Separator */}
                <div className="w-px h-40 bg-gray-300"></div>

                {/* By Company Section */}
                <div>
                    <h2 className="text-3xl font-semibold">By Company</h2>
                    <div className="w-8 h-0.5 bg-primary mb-4"></div>
                    <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
                        {byCompanyLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <figure className="flex-1 flex justify-center items-center">
                <Image
                    src="/slang-to-the-moon.png"
                    alt="moon image"
                    width={331}
                    height={331}
                />
            </figure>
        </div>
    );
}

export default ByNeedDropdown;
