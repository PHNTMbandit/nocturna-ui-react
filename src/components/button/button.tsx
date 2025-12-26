import { cn } from "@/utils/cn";
import { buttonVariants, type ButtonExtendedProps } from "./button.types";

export function Button({
  className,
  children,
  tone,
  style,
  size,
  ...props
}: ButtonExtendedProps) {
  return (
    <button
      className={cn(buttonVariants({ tone, style, size, className }))}
      {...props}>
      {children}
    </button>
  );
}
