"use client";
import { useRef, useState } from "react";

function useDropdownHoverDelay() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    const handleMouseEnter = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setIsOpen(true);
    }

    const handleMouseLeave = () => {
        timerRef.current = setTimeout(() => setIsOpen(false), 100)
    }

    const closeDropdown = () => {
        setIsOpen(false);
    }
    return { isOpen, handleMouseEnter, handleMouseLeave, closeDropdown }
}

export default useDropdownHoverDelay;