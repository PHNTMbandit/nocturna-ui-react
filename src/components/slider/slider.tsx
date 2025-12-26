"use no memo";

import * as React from "react";
import { useRanger } from "@tanstack/react-ranger";
import { SliderTrack } from "./slider-track";
import { SliderTick } from "./slider-tick";
import { SliderTickLabel } from "./slider-tick-label";
import { SliderSegment } from "./slider-segment";
import { SliderHandle } from "./slider-handle";
import type { Ranger } from "@tanstack/react-ranger";
import { cn } from "@/utils/cn";
import type { SliderProps } from "./slider.types";

export const Slider = ({
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  min,
  max,
  stepSize,
  defaultValues,
  showTickLabels,
  label,
  className,
  ref,
  ...props
}: SliderProps) => {
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const [values, setValues] = React.useState<ReadonlyArray<number>>(
    defaultValues || [50]
  );

  const sliderInstance = useRanger<HTMLDivElement>({
    getRangerElement: () => sliderRef.current,
    values,
    min: min ?? 0,
    max: max ?? 100,
    stepSize: stepSize ?? 1,
    onChange: (instance: Ranger<HTMLDivElement>) => {
      setValues(instance.sortedValues);
    },
  });

  return (
    <div
      ref={ref}
      className={cn("space-y-2xs", className)}
      {...props}>
      {label && (
        <p className="style-text-default--1 text-on-surface-variant">{label}</p>
      )}
      <div className="flex items-center w-full gap-sm">
        {LeadingIcon && (
          <LeadingIcon
            className="size-sm"
            weight="bold"
          />
        )}
        <SliderTrack sliderRef={sliderRef}>
          {showTickLabels &&
            sliderInstance.getTicks().map(({ value, key, percentage }) => (
              <SliderTick
                key={key}
                percentage={percentage}>
                <SliderTickLabel>{value}</SliderTickLabel>
              </SliderTick>
            ))}
          {sliderInstance.getSteps().map(({ left, width }, index) => (
            <SliderSegment
              key={index}
              index={index}
              steps={sliderInstance.getSteps().length}
              left={left}
              width={width}
            />
          ))}
          {sliderInstance
            .handles()
            .map(
              (
                {
                  isActive,
                  onKeyDownHandler,
                  onMouseDownHandler,
                  onTouchStart,
                  value,
                },
                index
              ) => (
                <SliderHandle
                  key={index}
                  sliderInstance={sliderInstance}
                  isActive={isActive}
                  onKeyDownHandler={onKeyDownHandler}
                  onMouseDownHandler={onMouseDownHandler}
                  onTouchStart={onTouchStart}
                  value={value}
                />
              )
            )}
        </SliderTrack>
        {TrailingIcon && (
          <TrailingIcon
            className="size-sm"
            weight="bold"
          />
        )}
      </div>
    </div>
  );
};
