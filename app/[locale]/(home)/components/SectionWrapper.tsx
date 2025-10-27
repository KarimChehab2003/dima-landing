import { cn } from "@/lib/utils";

function SectionWrapper({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section
            className={cn(
                // Base layout
                "relative flex flex-col justify-center items-center w-full",
                // Visual separation
                "py-16 px-6 mb-24 rounded-2xl",

                className
            )}
        >
            {children}
        </section>
    );
}

export default SectionWrapper;
