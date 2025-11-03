import ContentSection from "../components/ContentSection";
import BlogCard from "../components/BlogCard";

function SocialMediaAnalyticsSection() {
    return (
        <div className="container mx-auto flex justify-center items-center gap-8 my-12">
            <ContentSection title="Social Media Analytics">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <li key={i}>
                            <BlogCard />
                        </li>
                    ))}
                </ul>
            </ContentSection>
        </div>
    );
}

export default SocialMediaAnalyticsSection;