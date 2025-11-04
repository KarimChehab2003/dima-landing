import Image from "next/image";
import { Button } from "../ui/button";


function CaseStudyCard() {
    return (
        <article className="bg-[#00C7EC]/9 py-4 px-6 rounded-3xl shadow-md max-w-2xl">
            {/* Image */}
            <figure className="relative w-full overflow-hidden rounded-2xl">
                <Image
                    src="/featured-research.svg"
                    alt="featured card"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                />
            </figure>

            {/* Text and Actions */}
            <div className="flex flex-col">
                <h3 className="text-lg sm:text-2xl font-medium my-6 sm:my-8">
                    How an Agency based in Egypt uses dima to deliver 5x more accurate media coverage for clients
                </h3>
                <Button
                    size="xl"
                    className="bg-primary! hover:bg-primary/90! w-fit mb-4 text-sm sm:text-base"
                >
                    Read Full Story
                </Button>
            </div>
        </article>
    );
}

export default CaseStudyCard;