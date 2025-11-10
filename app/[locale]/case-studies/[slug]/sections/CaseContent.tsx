import { sideInfoCards } from "@/data/constants/info";
import SideInfo from "../components/SideInfo";
import Image from "next/image";

function CaseContent() {
    return (
        <section className="container mx-auto flex flex-col lg:flex-row justify-center items-start gap-8  px-4 sm:px-6 lg:px-12">
            {/* Main Text Content */}
            <div className="flex flex-col gap-6 flex-1">
                {/* Title */}
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug">
                    A leading Egypt-based PR agency with over 30 years of experience,
                    serving multinational clients across industries.
                </h2>

                {/* Attributes */}
                <div className="flex flex-col gap-6">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <li>
                            <p className="text-base sm:text-lg font-light text-gray-300">Industry</p>
                            <p className="text-base sm:text-lg font-medium">Public Relations & Communications</p>
                        </li>
                        <li>
                            <p className="text-base sm:text-lg font-light text-gray-300">Type</p>
                            <p className="text-base sm:text-lg font-medium">Agency</p>
                        </li>
                        <li>
                            <p className="text-base sm:text-lg font-light text-gray-300">HQ</p>
                            <p className="text-base sm:text-lg font-medium">Egypt</p>
                        </li>
                    </ul>

                    {/* Description List */}
                    <ul className="list-disc list-inside space-y-3 text-sm sm:text-base leading-relaxed">
                        {Array.from({ length: 7 }).map((_, i) => (
                            <li key={i}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Expedita fuga vero minima quasi ratione sunt dolorem cum.
                                Explicabo fugiat aut mollitia! Nemo, eveniet quam pariatur
                                sunt quo nihil provident. Possimus!
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-1/3 flex flex-col gap-8 mt-10 lg:mt-0">
                {/* Side Info Cards */}
                <ul className="overflow-hidden divide-y divide-gray-700">
                    {sideInfoCards.map((info, i) => (
                        <li key={i}>
                            <SideInfo {...info} />
                        </li>
                    ))}
                </ul>

                {/* Used Solutions */}
                <div className="p-6">
                    <h3 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-4">
                        Used Solutions:
                    </h3>
                    <ul className="space-y-3">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <li key={i} className="flex items-center gap-4">
                                <figure className="relative h-10 w-10 shrink-0">
                                    <Image
                                        src="/case-study-icons/prComms.svg"
                                        alt="pr comms icon"
                                        fill
                                        className="object-contain"
                                    />
                                </figure>
                                <p className="text-base sm:text-lg">PR & Comms</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </section>
    );
}

export default CaseContent;
