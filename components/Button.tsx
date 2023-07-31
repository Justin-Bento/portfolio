import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"


const buttonVariants = cva(
  "inline-flex items-center justify-center capitalize rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-1 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-600 text-slate-50 hover:bg-primary-700/90",
        destructive:
          "bg-red-500 text-red-50 hover:bg-red-500/90",
        outline:
          "border border-input bg-transparent hover:bg-primary-50 hover:text-slate-950 dark:border-primary-900 dark:hover:bg-primary-900/50 dark:hover:text-primary-40 dark:text-primary-40",
        secondary:
          "bg-primary-200/50 text-bg-primary-950 hover:bg-primary-300/80 dark:text-primary-50 dark:bg-primary-900/70 dark:hover:bg-primary-900",
          navLink: " bg-transparent dark:text-slate-50 tracking-wider dark:hover:bg-primary-900 hover:cursor-pointer shadow-none active:ring-1 ring-slate-400 text-slate-960 shadow hover:bg-primary-200/30",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:text-slate-100",
        link: "text-blue-700 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
