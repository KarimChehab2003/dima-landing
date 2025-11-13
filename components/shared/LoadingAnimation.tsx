// "use client"
// import Lottie from "lottie-react";
// import loadingAnim from "@/public/animations/blue-loading.json"

function LoadingAnimation() {
    return (
        // Lottie file Loader
        // <div className="min-h-dvh flex justify-center items-center">
        //     <Lottie
        //         animationData={loadingAnim}
        //         autoplay
        //         loop
        //         className="w-20 h-20"
        //     />
        // </div>

        // Classic spinner
        // <div className="flex items-center justify-center min-h-screen">
        //     <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        // </div>

        // Pulsing dots
        // <div className="flex items-center justify-center min-h-screen space-x-2 bg-white">
        //     <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
        //     <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
        //     <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.4s]"></div>
        // </div>

        // Ripple Loader
        // <div className="flex items-center justify-center min-h-screen bg-white">
        //     <div className="relative w-16 h-16">
        //         <div className="absolute w-full h-full border-4 border-blue-500 rounded-full animate-ping"></div>
        //         <div className="absolute w-full h-full border-4 border-blue-500 rounded-full opacity-75"></div>
        //     </div>
        // </div>

        // Text + Spinner
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600 text-lg font-medium">Loading...</p>
        </div>
    );
}

export default LoadingAnimation;