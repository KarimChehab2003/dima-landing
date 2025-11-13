"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingAnimation from "./LoadingAnimation";

export default function PageLoader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const heroSection = document.querySelector("#hero-section");
        if (!heroSection) {
            // fallback if hero doesn't exist
            setLoading(false);
            return;
        }

        const images = Array.from(heroSection.querySelectorAll("img"));
        const total = images.length;
        let loaded = 0;

        if (total === 0) {
            setLoading(false);
            return;
        }

        const handleLoad = () => {
            loaded++;
            if (loaded === total) {
                // only hide once all hero images are done
                setLoading(false);
            }
        };

        images.forEach((img) => {
            if (img.complete) {
                handleLoad();
            } else {
                img.addEventListener("load", handleLoad);
                img.addEventListener("error", handleLoad);
            }
        });

        return () => {
            images.forEach((img) => {
                img.removeEventListener("load", handleLoad);
                img.removeEventListener("error", handleLoad);
            });
        };
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-white"
                >
                    <LoadingAnimation />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
