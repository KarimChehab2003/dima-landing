import Link from "next/link";

function CaseStudyCard() {
    return (
        <article className="flex flex-col gap-4 p-8 shadow-[0_0_15px_rgba(0,0,0,0.07)] rounded-xl rounded-br-[64px]">
            {/* Metric */}
            <div className="space-x-2">
                <span className="text-3xl lg:text-5xl font-bold text-primary">5%</span>
                <span className="text-lg lg:text-[22px] font-medium text-gray-400">customer growth rate</span>
            </div>

            {/* Text */}
            <h3 className="text-lg lg:text-[22px] font-bold">A leading egypt-based pr agency with over 30 years of experience, serving multinational clients across industries</h3>
            <p>See how leading companies across MENA trust dima to stay ahead of conversations, protect their reputation, and unlock growth</p>
            <Link href="#" className="text-primary font-medium">Read more</Link>
        </article>
    );
}

export default CaseStudyCard;