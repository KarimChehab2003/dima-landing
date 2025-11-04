import SectionWrapper from "@/components/shared/SectionWrapper";
import { Input } from "@/components/ui/input";
import RequestDemoButton from "../(home)/components/RequestDemoButton";
import Image from "next/image";

function RequestDemoPage() {
    return (
        <main
            style={{
                backgroundImage: "url('/request-demo-bg.svg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
                backgroundSize: "55% auto",
            }}
            className="bg-white"
        >
            <SectionWrapper className="min-h-dvh justify-stretch">
                <div className="container mx-auto flex flex-col-reverse lg:flex-row justify-center items-center lg:items-stretch gap-12 my-12 flex-1">
                    {/* Text & Form Section */}
                    <div className="flex-1 flex flex-col justify-center gap-4 text-center lg:text-left">
                        <p className="text-primary font-medium mb-4">— REQUEST A DEMO</p>
                        <h1 className="text-3xl sm:text-4xl font-bold">See dima AI in Action</h1>
                        <div className="text-lg sm:text-xl space-y-4">
                            <p className="font-semibold tracking-wide">
                                Ready to explore how Dima AI can transform the way your team works?
                            </p>
                            <p>
                                Whether you&apos;re looking to automate tasks, analyze data at scale, or enhance your workflows with
                                cutting-edge AI, our team is here to walk you through it. No pressure — just insights tailored to your business.
                            </p>
                        </div>

                        <form className="flex flex-col gap-4 mt-6">
                            <Input type="text" placeholder="Name" />
                            <Input type="email" placeholder="Email" />
                            <Input type="text" placeholder="Company" />
                            <Input type="text" placeholder="Country" />
                            <Input type="text" placeholder="Phone Number" />
                            <RequestDemoButton className="w-full mt-4 capitalize" size="xl" />
                        </form>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 flex justify-center lg:justify-end w-full">
                        <figure className="relative w-full h-72 sm:h-96 lg:h-full">
                            <Image
                                src="/request-demo-image.svg"
                                alt="phone image"
                                fill
                                className="object-contain"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </figure>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}

export default RequestDemoPage;
