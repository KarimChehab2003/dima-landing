import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";

type Video = {
    src: string;
    alt?: string;
};

type VideosSectionProps = {
    title: string;
    videos: Video[];
};

function VideosSection({ title, videos }: VideosSectionProps) {
    return (
        <div className="container mx-auto flex justify-center items-center gap-8 my-12 rounded-4xl bg-muted py-12">
            <div className="flex flex-col justify-center gap-8 p-4 max-w-6xl w-full">
                {/* Title */}
                <h2 className="text-2xl font-bold">{title}</h2>

                {/* Videos grid */}
                <ul
                    className={`grid gap-8 ${videos.length === 1
                        ? "grid-cols-1" : videos.length === 2
                            ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                        }`}>
                    {videos.map((video, i) => (
                        <li key={i}>
                            <figure className="flex justify-center items-center">
                                <Image
                                    src={video.src}
                                    alt={video.alt || `video ${i + 1}`}
                                    width={270}
                                    height={500}
                                />
                            </figure>
                        </li>
                    ))}
                </ul>

                <div className="inline-flex justify-end items-center gap-2">
                    <p className="text-lg font-bold text-end">Follow us on social:</p>
                    <div className="inline-flex items-center gap-2">
                        <Link
                            href="https://www.linkedin.com/company/darwinz-ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin size={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideosSection;
