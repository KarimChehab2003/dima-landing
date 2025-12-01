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
        "py-12 lg:py-10 px-6",

        className
      )}
    >
      {children}
    </section>
  );
}

export default SectionWrapper;
