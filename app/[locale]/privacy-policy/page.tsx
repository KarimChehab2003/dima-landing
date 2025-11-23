import SectionWrapper from "@/components/shared/SectionWrapper";
import { useLocale } from "next-intl";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"
import ArabicPolicy from "./components/ArabicPolicy";
import EnglishPolicy from "./components/EnglishPolicy";

function PrivacyPolicyPage() {
    const locale = useLocale();
    const isRTL = locale === "ar";
    return (
        <main>
            <SectionWrapper className="min-h-dvh mt-24">
                <div className="container max-w-7xl mx-auto prose text-lg lg:text-xl">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            // Changing a tag into next.js Link tag
                            a: ({ href, children, ...props }) => {
                                return (
                                    <Link href={href || "#"} className="text-primary" {...props}>{children}</Link>
                                )
                            },
                        }}>
                        {isRTL ? ArabicPolicy() : EnglishPolicy()}
                    </ReactMarkdown>
                </div>
            </SectionWrapper>
        </main>
    );
}

export default PrivacyPolicyPage;