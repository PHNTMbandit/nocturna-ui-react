import type { Icon } from "@phosphor-icons/react";
import type { Ranger } from "@tanstack/react-ranger";

export type SliderProps = React.ComponentProps<"div"> & {
  leadingIcon?: Icon;
  trailingIcon?: Icon;
  min?: number;
  max?: number;
  stepSize?: number;
  defaultValues?: Array<number>;
  showTickLabels?: boolean;
  label?: string;
};

export type SliderTrackProps = React.ComponentProps<"div"> & {
  sliderRef: React.RefObject<HTMLDivElement | null>;
};

export type SliderHandleProps = React.ComponentProps<"button"> & {
  sliderInstance: Ranger<HTMLDivElement>;
  isActive: boolean;
  onKeyDownHandler: React.KeyboardEventHandler<HTMLButtonElement>;
  onMouseDownHandler: React.MouseEventHandler<HTMLButtonElement>;
  onTouchStart: React.TouchEventHandler<HTMLButtonElement>;
  value: number;
};

export type SliderSegmentProps = React.ComponentProps<"div"> & {
  index: number;
  steps: number;
  left: number;
  width: number;
};

export type SliderTickProps = React.ComponentProps<"div"> & {
  percentage: number;
};

export type SliderTickLabelProps = React.ComponentProps<"p">;
