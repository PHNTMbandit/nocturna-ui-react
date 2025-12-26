"use no memo";

import type { SliderTrackProps } from "./slider.types";
import { cn } from "@/utils/cn";

export const SliderTrack = ({
  className,
  children,
  sliderRef,
  ...props
}: SliderTrackProps) => {
  return (
    <div
      className={cn(
        "relative h-2xs inset-shadow-1-shadow rounded-full bg-surface-dim grow",
        className
      )}
      ref={sliderRef}
      {...props}>
      {children}
    </div>
  );
};
