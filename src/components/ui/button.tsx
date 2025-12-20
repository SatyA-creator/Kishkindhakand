import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        mythic: 
          "relative px-8 py-4 font-display text-sm uppercase tracking-[0.2em] overflow-hidden bg-gradient-to-r from-jungle-emerald to-jungle-emerald/80 text-jungle-charcoal font-bold border border-jungle-emerald/50 hover:shadow-[0_0_40px_hsl(160_75%_52%/0.4)] hover:scale-105",
        mythicOutline:
          "relative px-8 py-4 font-display text-sm uppercase tracking-[0.2em] bg-transparent text-jungle-emerald border border-jungle-emerald/40 hover:bg-jungle-emerald/10 hover:border-jungle-emerald",
        gold:
          "relative px-8 py-4 font-display text-sm uppercase tracking-[0.2em] overflow-hidden bg-gradient-to-r from-jungle-gold to-jungle-gold/80 text-jungle-charcoal font-bold border border-jungle-gold/50 hover:shadow-[0_0_40px_hsl(42_55%_55%/0.4)] hover:scale-105",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-md px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
