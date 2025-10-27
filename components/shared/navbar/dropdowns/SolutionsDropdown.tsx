import { dimaSolutions } from "@/data/constants/links";
import SolutionNavLink from "../SolutionNavLink";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

function SolutionsDropdown() {
    return (
        <div className="flex flex-col space-y-4">
            {/* Header */}
            <p>
                <h2 className="text-3xl font-semibold">Solutions</h2>
                <div className="w-8 h-0.5 bg-primary mb-4"></div>
            </p>

            <div className="flex justify-center items-center space-y-4">
                {/* Customer Insights */}
                <Link href="/solutions/consumer-insights" className="flex justify-center items-center gap-4 group">
                    <figure className="flex justify-center items-center border border-black rounded-md shadow-md shadow-primary p-8">
                        <Image
                            src="/nav-links/ci.png"
                            alt="customer insights"
                            width={170}
                            height={170}
                        />
                    </figure>
                    <div>
                        <p className="font-semibold group-hover:underline">Customer Insights</p>
                        <p className="text-muted-foreground text-xs">Understand your audience everywhere</p>
                    </div>
                </Link>

                {/* Links list */}
                <ul className="max-w-4xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {dimaSolutions.filter((s) => s.title !== "Consumer Insights").map((link) => (
                        <li key={link.title}>
                            <SolutionNavLink {...link} />
                        </li>
                    ))}
                </ul>
            </div>

            <Button className="py-3 px-6 rounded-sm! bg-primary! w-fit">Dima AI</Button>
        </div>
    );
}

export default SolutionsDropdown;