"use client"
import Lottie from "lottie-react";
import loadingAnim from "@/public/animations/blue-loading.json"

function LoadingAnimation() {
    return (
        <div className="min-h-dvh flex justify-center items-center">
            <Lottie
                animationData={loadingAnim}
                autoplay
                loop
                className="w-20 h-20"
            />
        </div>
    );
}

export default LoadingAnimation;