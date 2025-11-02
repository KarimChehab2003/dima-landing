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
        // Visual separation - Section spacing
        // Desktop spacing: 80px (py-20), Mobile: 48px (py-12)
        "py-12 lg:py-20 px-6 mb-24 rounded-2xl",

        className
      )}
    >
      {children}
    </section>
  );
}

export default SectionWrapper;
