
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function DimaSection() {
    return (
        <div className="bg-[#053A60]">
            <div className="container mx-auto flex flex-col justify-center items-center gap-8 text-white min-h-[740px] px-4">
                <h2 className="text-4xl g:text-[66px] font-bold text-center">Boost your business with dima AI </h2>
                <p className="text-lg lg:text-2xl font-medium max-w-2xl text-center">Whether you&apos;re an agency or an enterprise, dima empowers you to monitor every mention, predict crises before they escalate, analyze conversations in real time, benchmark performance across competitors and deliver more accurate coverage with seamless reporting. Get your personalized demo today.</p>

                <Link href="/request-demo">
                    <Button className="group bg-white! text-black! hover:text-white! hover:bg-black! transition-colors duration-300 w-fit" size="xl">
                        <div className="relative w-[30px] h-[30px]">
                            {/* Black icon (default) */}
                            <Image
                                src="/computer-black.svg"
                                alt="black computer icon"
                                fill
                                className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                            />
                            {/* White icon (shown on hover) */}
                            <Image
                                src="/computer.svg"
                                alt="white computer icon"
                                fill
                                className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute top-0 left-0"
                            />
                        </div>

                        <span className="tracking-wide">Request a Demo</span>
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default DimaSection;