import { cn } from "@/utils/cn";
import type { SeparatorProps } from "./separator.types";

export const Separator = ({
  className,
  children,
  ref,
  ...props
}: SeparatorProps) => {
  return (
    <div
      className={cn("", className)}
      ref={ref}
      {...props}>
      {children}
    </div>
  );
};
