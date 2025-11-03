import ContentSection from "../components/ContentSection";
import BlogCard from "../components/BlogCard";

function GuideSection() {
    return (
        <div className="container mx-auto flex flex-col lg:flex-row justify-center items-start gap-8 my-12">
            <ContentSection title="Guides">
                <ul className="grid grid-cols-1 gap-8">
                    {Array.from({ length: 2 }).map((_, i) => (
                        <li key={i}>
                            <BlogCard orientation="horizontal" />
                        </li>
                    ))}
                </ul>
            </ContentSection>
            <ContentSection title="Data Reports">
                <ul className="grid grid-cols-1 gap-8">
                    {Array.from({ length: 2 }).map((_, i) => (
                        <li key={i}>
                            <BlogCard orientation="horizontal" />
                        </li>
                    ))}
                </ul>
            </ContentSection>
            <ContentSection title="All Marketing Insights">
                <ul className="grid grid-cols-1 gap-8">
                    {Array.from({ length: 2 }).map((_, i) => (
                        <li key={i}>
                            <BlogCard orientation="horizontal" />
                        </li>
                    ))}
                </ul>
            </ContentSection>
        </div>
    );
}

export default GuideSection;