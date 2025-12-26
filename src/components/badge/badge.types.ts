import * as React from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap select-none transition-all px-xs py-3xs gap-3xs font-medium",
  {
    variants: {
      tone: {
        primary: "",
        secondary: "",
        tertiary: "",
        neutral: "",
        error: "",
        success: "",
        warning: "",
      },
      style: {
        solid: "raised-1",
        outline: "bg-transparent outline outline-2",
      },
      radius: {
        rounded: "rounded-lg",
        circle: "rounded-full",
      },
    },
    defaultVariants: {
      tone: "neutral",
      style: "solid",
      radius: "rounded",
    },
    compoundVariants: [
      // Primary tone
      {
        tone: "primary",
        style: "solid",
        className: "bg-primary text-on-primary",
      },
      {
        tone: "primary",
        style: "outline",
        className: "outline-primary text-primary",
      },

      // Secondary tone
      {
        tone: "secondary",
        style: "solid",
        className: "bg-secondary text-on-secondary",
      },
      {
        tone: "secondary",
        style: "outline",
        className: "outline-secondary text-secondary",
      },

      {
        tone: "tertiary",
        style: "solid",
        className: "bg-tertiary text-on-tertiary",
      },
      {
        tone: "tertiary",
        style: "outline",
        className: "outline-tertiary text-tertiary",
      },

      // Neutral tone
      {
        tone: "neutral",
        style: "solid",
        className: "bg-surface-container",
      },
      {
        tone: "neutral",
        style: "outline",
        className: "outline-on-surface text-on-surface",
      },

      // error tone
      {
        tone: "error",
        style: "solid",
        className: "bg-error text-on-error",
      },
      {
        tone: "error",
        style: "outline",
        className: "outline-error text-error",
      },
      {
        tone: "success",
        style: "solid",
        className: "bg-success text-on-success",
      },
      {
        tone: "success",
        style: "outline",
        className: "outline-success text-success",
      },

      // Warning tone
      {
        tone: "warning",
        style: "solid",
        className: "bg-warning text-on-warning",
      },
      {
        tone: "warning",
        style: "outline",
        className: "outline-warning text-warning",
      },
    ],
  }
);

type BadgeProps = React.ComponentProps<"div">;

export interface BadgeExtendedProps
  extends Omit<BadgeProps, "style">,
    VariantProps<typeof badgeVariants> {
  style?: "solid" | "outline";
  radius?: "rounded" | "circle";
}
