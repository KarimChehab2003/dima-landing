import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";

function LearnMoreSection() {
    return (
        <div className="container mx-auto flex justify-center items-center gap-8 my-12 rounded-4xl bg-muted py-12">
            <div className="flex flex-col justify-center gap-8 p-4">
                <h2 className="text-2xl font-bold">Learn more from dima.ai on social</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <li key={i}>
                            <figure className="flex justify-center items-center">
                                <Image
                                    src={`/learn-${i + 1}.svg`}
                                    alt={`image ${i + 1}`}
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
                        <Link href="https://www.linkedin.com/company/darwinz-ai/">
                            <FaLinkedin size={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LearnMoreSection;