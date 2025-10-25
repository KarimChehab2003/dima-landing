import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-200 ease-out active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-black text-white hover:bg-[#1a1a1a] shadow-sm hover:shadow-md focus-visible:ring-ring/40 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-400/50",
        outline:
          "border border-input bg-background text-foreground hover:bg-accent/10 hover:text-accent-foreground dark:border-neutral-700 dark:bg-transparent dark:hover:bg-neutral-800",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-black hover:text-white dark:hover:bg-neutral-800 dark:text-neutral-500 dark:hover:text-white",
        link:
          "text-primary underline-offset-4 hover:underline hover:text-primary/80",
        gradient:
          "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-sm hover:shadow-md hover:opacity-90 focus-visible:ring-purple-400/40",
        glass:
          "backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors",
      },
      size: {
        default: "h-9 px-4 py-2 text-sm has-[>svg]:px-3",
        sm: "h-8 rounded-full gap-1.5 px-3 has-[>svg]:px-2.5 text-xs",
        lg: "h-11 rounded-full px-6 has-[>svg]:px-4 text-base",
        xl: "h-14 rounded-full px-8 text-lg font-semibold has-[>svg]:px-6",
        "2xl": "h-16 rounded-full px-10 text-xl font-bold has-[>svg]:px-8",
        icon: "size-9 rounded-full",
        "icon-sm": "size-8 rounded-full",
        "icon-lg": "size-10 rounded-full",
        "icon-xl": "size-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
