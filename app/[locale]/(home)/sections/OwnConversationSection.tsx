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
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-linear-to-t from-[#AEEBFF] via-[#5FC9E7] to-primary rounded-[64px] w-full relative">
                    {/* Left side - Image */}
                    <figure className="relative w-full md:w-2/3 h-[600px] shrink-0">
                        <Image
                            src={activeFeature?.image}
                            alt={activeFeature?.title}
                            fill
                            className="object-contain rounded-2xl p-8"
                            priority
                        />
                    </figure>


                    {/* Right side - Text */}
                    <div className="max-w-xl flex flex-col justify-start items-start space-y-8  absolute -top-1 right-0">
                        <div className="space-y-3 self-start bg-white rounded-b-4xl rounded-tl-lg ps-8 pe-16 py-12">
                            <h3 className="text-4xl font-bold text-foreground my-8">{activeFeature.title}</h3>
                            <p className="text-medium leading-relaxed text-lg">
                                {activeFeature.subTitle}
                            </p>
                        </div>
                        <Link href="/request-demo">
                            <Button size="2xl" className="flex items-center gap-2">
                                <FaDisplay className="size-5" />
                                <span className="capitalize">Request a demo</span>
                            </Button>
                        </Link>
                    </div>
                </div>


            </div>
        </SectionWrapper>
    );
}

export default OwnConversationSection;