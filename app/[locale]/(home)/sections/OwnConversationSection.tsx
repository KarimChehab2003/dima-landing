"use client";
import { ownConversationInfo } from "@/data/constants/info";
import SectionWrapper from "../components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import { ConversationInfo } from "@/types/info";
import { PiUserList } from "react-icons/pi";
import { FaDisplay } from "react-icons/fa6";


function OwnConversationSection() {
    const [activeFeature, setActiveFeature] = useState<ConversationInfo>(
        {
            title: "Elevating social Presence",
            subTitle: "Cut through the noise of millions of unfilteredconversations to uncover the insights thatmatter most powered by AI.",
            icon: PiUserList,
            image: "/elevating-social-presence.png"
        }
    );
    return (
        <SectionWrapper className="justify-center items-center px-20">
            <div className="container mx-auto flex flex-col items-center gap-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-4xl sm:text-5xl">Own Every Conversation</h2>
                    <p className="text-xl text-muted-foreground">Discover how our suite of AI powered solutions help you see, understand, and act with precision.</p>
                </div>

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

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-muted rounded-2xl p-8 shadow-md w-full">
                    {/* Left side - Image */}
                    <figure className="relative w-full md:w-2/3 h-112 shrink-0">
                        <Image
                            src={activeFeature?.image}
                            alt={activeFeature?.title}
                            fill
                            className="object-contain rounded-2xl"
                            priority
                        />
                    </figure>


                    {/* Right side - Text */}
                    <div className="flex flex-col justify-center items-start w-full md:w-1/2 space-y-6">
                        <div className="space-y-3 self-start">
                            <h3 className="text-2xl font-bold text-foreground">{activeFeature.title}</h3>
                            <p className="text-medium leading-relaxed">
                                {activeFeature.subTitle}
                            </p>
                        </div>
                        <Button size="2xl" className="flex items-center gap-2">
                            <FaDisplay className="size-5" />
                            <span className="capitalize">Request a demo</span>
                        </Button>
                    </div>
                </div>


            </div>
        </SectionWrapper>
    );
}

export default OwnConversationSection;