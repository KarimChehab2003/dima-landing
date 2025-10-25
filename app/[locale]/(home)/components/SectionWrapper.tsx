import { cn } from "@/lib/utils";

function SectionWrapper({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <section className={cn("min-h-dvh mb-8 flex", className)}>
            {children}
        </section>
    );
}

export default SectionWrapper;