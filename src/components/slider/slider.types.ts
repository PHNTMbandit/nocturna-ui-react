import type { Icon } from "@phosphor-icons/react";
import type { Ranger } from "@tanstack/react-ranger";
import type {
  ComponentProps,
  KeyboardEventHandler,
  MouseEventHandler,
  RefObject,
  TouchEventHandler,
} from "react";

export type SliderProps = ComponentProps<"div"> & {
  leadingIcon?: Icon;
  trailingIcon?: Icon;
  min?: number;
  max?: number;
  stepSize?: number;
  defaultValues?: Array<number>;
  showTickLabels?: boolean;
  label?: string;
};

export type SliderTrackProps = ComponentProps<"div"> & {
  sliderRef: RefObject<HTMLDivElement | null>;
};

export type SliderHandleProps = ComponentProps<"button"> & {
  sliderInstance: Ranger<HTMLDivElement>;
  isActive: boolean;
  onKeyDownHandler: KeyboardEventHandler<HTMLButtonElement>;
  onMouseDownHandler: MouseEventHandler<HTMLButtonElement>;
  onTouchStart: TouchEventHandler<HTMLButtonElement>;
  value: number;
};

export type SliderSegmentProps = ComponentProps<"div"> & {
  index: number;
  steps: number;
  left: number;
  width: number;
};

export type SliderTickProps = ComponentProps<"div"> & {
  percentage: number;
};

export type SliderTickLabelProps = ComponentProps<"p">;
