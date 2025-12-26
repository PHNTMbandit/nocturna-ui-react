"use no memo";

import type { SliderTickProps } from "./slider.types";
import { cn } from "@/utils/cn";

export const SliderTick = ({
  percentage,
  className,
  children,
  ref,
  ...props
}: SliderTickProps) => {
  return (
    <div
      className={cn("absolute top-2xs -translate-x-1/2", className)}
      ref={ref}
      {...props}
      style={{ left: `${percentage}%` }}>
      <span className="absolute bg-on-surface-variant rounded-full left-0 h-2xs w-[2px] -translate-x-1/2 translate-y-[0.7rem]" />
      {children}
    </div>
  );
};
