"use no memo";

import type { SliderSegmentProps } from "./slider.types";
import { cn } from "@/utils/cn";

export const SliderSegment = ({
  index,
  steps,
  left,
  width,
  className,
  children,
  ref,
  ...props
}: SliderSegmentProps) => {
  return (
    <div
      className={cn(
        "absolute bg-primary h-full rounded-full inset-shadow-1-shadow",
        className
      )}
      style={{
        background: `${
          index === steps - 1 ? "transparent" : "var(--color-primary)"
        }`,
        left: `${left}%`,
        width: `${width}%`,
      }}
      ref={ref}
      {...props}>
      {children}
    </div>
  );
};
