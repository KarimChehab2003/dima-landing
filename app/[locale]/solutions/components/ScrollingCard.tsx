import { CardType } from "@/types/info";
import Image from "next/image";

function ScrollingCard({ title, description }: CardType) {
    return (
        <article className="flex flex-col justify-center items-center gap-6">
            {/* Image */}
            <figure className="px-4 py-32 rounded-4xl bg-[linear-gradient(-125deg,#95DDEE_0%,#11A8CF_32%,#95DDEE_46%,#11A8CF_100%)]">
                <Image src="https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/Solutions%2FPinnedSectionScroll%2Fscroll-image-1.svg?alt=media&token=1a25ed39-39f9-4481-9b2a-8b11808952e4" width={540} height={340} alt="Step 1" />
            </figure>

            {/* Text */}
            <div>
                <h2 className="text-2xl lg:text-[44px]">{title}</h2>
                <p className="text-xl font-light mt-4">{description}</p>
            </div>
        </article>
    );
}

export default ScrollingCard;