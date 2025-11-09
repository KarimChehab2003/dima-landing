import ContentSection from "../components/ContentSection";
import BlogCard from "../components/BlogCard";

function LatestSection() {
    return (
        <div className="container mx-auto flex justify-center items-center gap-8 my-12">
            <ContentSection title="The Latest" className="gap-8">
                {/* Blogs */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {
                        Array.from({ length: 6 }).map((_, i) => (
                            <li key={i}>
                                <BlogCard />
                            </li>
                        ))
                    }
                </ul>

                {/* Side Blogs */}
                <ul className="hidden md:block">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <li key={i} className={i !== 2 ? "border-b border-b-muted my-4" : "border-b-0"}>
                            <BlogCard includeImage={false} orientation="horizontal" />
                        </li>
                    ))}
                </ul>
            </ContentSection>
        </div>
    );
}

export default LatestSection;