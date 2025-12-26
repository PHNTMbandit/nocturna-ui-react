import { cn } from "@/utils/cn";
import type { LabelProps } from "./label.types";

export const Label = ({ className, children, ref, ...props }: LabelProps) => {
  return (
    <label
      data-slot="label"
      className={cn("hover:cursor-pointer", className)}
      ref={ref}
      {...props}>
      {children}
    </label>
  );
};
