"use no memo";

import React from "react";
import type { SliderHandleProps } from "./slider.types";
import { cn } from "@/utils/cn";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";

export const SliderHandle = ({
  sliderInstance,
  isActive,
  onKeyDownHandler,
  onMouseDownHandler,
  onTouchStart,
  value,
  className,
  children,
  ref,
  ...props
}: SliderHandleProps) => {
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <Tooltip
      open={isActive || isHovering}
      trackCursorAxis="x">
      <TooltipTrigger
        render={
          <button
            onKeyDown={onKeyDownHandler}
            onMouseDown={onMouseDownHandler}
            onTouchStart={onTouchStart}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            role="slider"
            aria-valuemin={sliderInstance.options.min}
            aria-valuemax={sliderInstance.options.max}
            aria-valuenow={value}
            style={{
              left: `${sliderInstance.getPercentageForValue(value)}%`,
              zIndex: isActive ? "1" : "0",
            }}
            className={cn(
              "absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full outline-none border-2 border-primary bg-surface-container hover:cursor-pointer active:border-secondary hover:border-secondary transition-[width,height,border] aspect-square",
              isActive ? "size-md shadow-4-shadow" : "size-sm shadow-1-shadow",
              className
            )}
            ref={ref}
            {...props}>
            {children}
          </button>
        }
      />
      <TooltipContent>
        <span>{value}</span>
      </TooltipContent>
    </Tooltip>
  );
};
