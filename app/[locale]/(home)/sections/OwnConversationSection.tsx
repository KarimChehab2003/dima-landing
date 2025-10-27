"use client";
import { ownConversationInfo } from "@/data/constants/info";
import SectionWrapper from "../components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import { ConversationInfo } from "@/types/info";
import { FaDisplay } from "react-icons/fa6";
import { Link } from "@/i18n/navigation";


function OwnConversationSection() {
    const [activeFeature, setActiveFeature] = useState<ConversationInfo>(ownConversationInfo[4]);

    return (
        <SectionWrapper className="justify-center items-center px-20">
            <div className="flex flex-col items-center gap-8 w-full">
                {/* Header */}
                <div className="space-y-2 text-center">
                    <h2 className="text-4xl sm:text-5xl my-4">Own Every Conversation</h2>
                    <p className="text-xl text-muted-foreground">Discover how our suite of AI powered solutions help you see, understand, and act with precision.</p>
                </div>

                {/* Buttons */}
                <div className="inline-flex justify-center items-center gap-4">
                    {
                        ownConversationInfo.map((info) => (
                            <Button
                                key={info.title}
                                variant={activeFeature?.title === info.title ? "default" : "ghost"}
                                size="lg"
                                onClick={() => setActiveFeature(info)}
                                className="flex items-center gap-2"
                            >
                                <info.icon size={18} />
                                <span>{info.title}</span>
                            </Button>
                        ))
                    }
                </div>

                {/* Image + Text */}
                <div className="flex flex-col md:flex-row items-center justify-center  w-full relative h-[600px] ">
                    {/* Left side - Image */}
                    <figure className="relative w-full md:w-2/3 min-w-[500px] h-[600px] shrink-0 z-20">
                        <Image
                            src={activeFeature?.image}
                            alt={activeFeature?.title}
                            fill
                            className="object-contain rounded-t-4xl rounded-bl-4xl bg-[linear-gradient(0,#11A8CF_0%,#5FC9E7_32%,#87DAF3_66%,#AEEBFF_100%)] p-8"
                            priority
                        />
                    </figure>

                    {/* Right side - Info & Button Stack */}
                    <div className="flex flex-col h-full bg-[linear-gradient(0,#11A8CF_0%,#5FC9E7_32%,#87DAF3_66%,#AEEBFF_100%)] rounded-t-4xl rounded-br-4xl">
                        {/* Info Box */}
                        <div className="bg-white rounded-l-4xl rounded-tl-lg rounded-br-2xl ps-8 pe-16 max-w-lg flex-1 flex flex-col justify-center items-start">
                            <h3 className="text-3xl font-bold text-foreground my-8">{activeFeature.title}</h3>
                            <p className="text-medium leading-relaxed text-lg">
                                {activeFeature.subTitle}
                            </p>
                        </div>

                        {/* Button in transparent div */}
                        <div className="w-full h-full flex flex-1 py-4">
                            <Link href="/request-demo">
                                <Button size="2xl" className="flex items-center gap-2">
                                    <FaDisplay className="size-5" />
                                    <span>Request a demo</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>



            </div>
        </SectionWrapper>
    );
}

export default OwnConversationSection;