import * as React from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full select-none transition-all disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      tone: {
        destructive: "",
        glass: "",
        neutral: "",
        primary: "",
        secondary: "",
        success: "",
        accent: "",
        warning: "",
      },
      style: {
        solid: "",
        outline: "active:border-transparent",
        ghost: "",
      },
      size: {
        large: "h-2xl px-lg style-text-default-1 gap-xs [&>svg]:size-md",
        medium: "h-xl px-md style-text-default-0 gap-2xs [&>svg]:size-sm",
        small: "h-lg px-sm style-text-default--1 gap-3xs [&>svg]:size-xs",
        iconLarge: "size-2xl p-0 [&>svg]:size-md",
        iconMedium: "size-xl p-0 [&>svg]:size-sm",
        iconSmall: "size-lg p-0 [&>svg]:size-xs",
      },
    },
    defaultVariants: {
      tone: "primary",
      style: "solid",
      size: "medium",
    },
    compoundVariants: [
      {
        tone: "primary",
        style: "solid",
        className: "bg-primary text-on-primary",
      },
      {
        tone: "primary",
        style: "solid",
        size: ["small", "iconSmall"],
        className: "raised-1 hover:raised-2 active:inset-shadow-1-shadow",
      },
      {
        tone: "primary",
        style: "solid",
        size: ["medium", "iconMedium"],
        className: "raised-2 hover:raised-4 active:inset-shadow-2-shadow",
      },
      {
        tone: "primary",
        style: "solid",
        size: ["large", "iconLarge"],
        className: "raised-4 hover:raised-8 active:inset-shadow-3-shadow",
      },
      {
        tone: "primary",
        style: "outline",
        className:
          "border-primary text-primary hover:text-on-primary-container hover:bg-primary-container active:bg-transparent",
      },
      {
        tone: "primary",
        style: "outline",
        size: ["small", "iconSmall"],
        className: "border-1",
      },
      {
        tone: "primary",
        style: "outline",
        size: ["medium", "iconMedium"],
        className: "border-2",
      },
      {
        tone: "primary",
        style: "outline",
        size: ["large", "iconLarge"],
        className: "border-4",
      },
      {
        tone: "primary",
        style: "ghost",
        className: "text-primary hover:surface-bright active:bg-surface-dim",
      },
      {
        tone: "primary",
        style: "ghost",
        size: ["small", "iconSmall"],
        className: "hover:raised-1 active:inset-shadow-1-shadow",
      },
      {
        tone: "primary",
        style: "ghost",
        size: ["medium", "iconMedium"],
        className: "hover:raised-2 active:inset-shadow-2-shadow",
      },
      {
        tone: "primary",
        style: "ghost",
        size: ["large", "iconLarge"],
        className: "hover:raised-4 active:inset-shadow-3-shadow",
      },
      // Secondary variants
      {
        tone: "secondary",
        style: "solid",
        className: "bg-secondary text-on-secondary",
      },
      {
        tone: "secondary",
        style: "solid",
        size: ["small", "iconSmall"],
        className: "raised-1 hover:raised-2 active:inset-shadow-1-shadow",
      },
      {
        tone: "secondary",
        style: "solid",
        size: ["medium", "iconMedium"],
        className: "raised-2 hover:raised-4 active:inset-shadow-2-shadow",
      },
      {
        tone: "secondary",
        style: "solid",
        size: ["large", "iconLarge"],
        className: "raised-4 hover:raised-8 active:inset-shadow-3-shadow",
      },
      {
        tone: "secondary",
        style: "outline",
        className:
          "border-secondary text-secondary hover:text-on-secondary-container hover:bg-secondary-container active:bg-transparent",
      },
      {
        tone: "secondary",
        style: "outline",
        size: ["small", "iconSmall"],
        className: "border-1",
      },
      {
        tone: "secondary",
        style: "outline",
        size: ["medium", "iconMedium"],
        className: "border-2",
      },
      {
        tone: "secondary",
        style: "outline",
        size: ["large", "iconLarge"],
        className: "border-4",
      },
      {
        tone: "secondary",
        style: "ghost",
        className: "text-secondary hover:surface-bright active:bg-surface-dim",
      },
      {
        tone: "secondary",
        style: "ghost",
        size: ["small", "iconSmall"],
        className: "hover:raised-1 active:inset-shadow-1-shadow",
      },
      {
        tone: "secondary",
        style: "ghost",
        size: ["medium", "iconMedium"],
        className: "hover:raised-2 active:inset-shadow-2-shadow",
      },
      {
        tone: "secondary",
        style: "ghost",
        size: ["large", "iconLarge"],
        className: "hover:raised-4 active:inset-shadow-3-shadow",
      },
      // Accent variants
      {
        tone: "accent",
        style: "solid",
        className: "bg-accent text-on-accent",
      },
      {
        tone: "accent",
        style: "solid",
        size: ["small", "iconSmall"],
        className: "raised-1 hover:raised-2 active:inset-shadow-1-shadow",
      },
      {
        tone: "accent",
        style: "solid",
        size: ["medium", "iconMedium"],
        className: "raised-2 hover:raised-4 active:inset-shadow-2-shadow",
      },
      {
        tone: "accent",
        style: "solid",
        size: ["large", "iconLarge"],
        className: "raised-4 hover:raised-8 active:inset-shadow-3-shadow",
      },
      {
        tone: "accent",
        style: "outline",
        className:
          "border-accent text-accent hover:text-on-accent-container hover:bg-accent-container active:bg-transparent",
      },
      {
        tone: "accent",
        style: "outline",
        size: ["small", "iconSmall"],
        className: "border-1",
      },
      {
        tone: "accent",
        style: "outline",
        size: ["medium", "iconMedium"],
        className: "border-2",
      },
      {
        tone: "accent",
        style: "outline",
        size: ["large", "iconLarge"],
        className: "border-4",
      },
      {
        tone: "accent",
        style: "ghost",
        className: "text-accent hover:surface-bright active:bg-surface-dim",
      },
      {
        tone: "accent",
        style: "ghost",
        size: ["small", "iconSmall"],
        className: "hover:raised-1 active:inset-shadow-1-shadow",
      },
      {
        tone: "accent",
        style: "ghost",
        size: ["medium", "iconMedium"],
        className: "hover:raised-2 active:inset-shadow-2-shadow",
      },
      {
        tone: "accent",
        style: "ghost",
        size: ["large", "iconLarge"],
        className: "hover:raised-4 active:inset-shadow-3-shadow",
      },
      // Success variants
      {
        tone: "success",
        style: "solid",
        className: "bg-success text-on-success",
      },
      {
        tone: "success",
        style: "solid",
        size: ["small", "iconSmall"],
        className: "raised-1 hover:raised-2 active:inset-shadow-1-shadow",
      },
      {
        tone: "success",
        style: "solid",
        size: ["medium", "iconMedium"],
        className: "raised-2 hover:raised-4 active:inset-shadow-2-shadow",
      },
      {
        tone: "success",
        style: "solid",
        size: ["large", "iconLarge"],
        className: "raised-4 hover:raised-8 active:inset-shadow-3-shadow",
      },
      {
        tone: "success",
        style: "outline",
        className:
          "border-success text-success hover:text-on-success-container hover:bg-success-container active:bg-transparent",
      },
      {
        tone: "success",
        style: "outline",
        size: ["small", "iconSmall"],
        className: "border-1",
      },
      {
        tone: "success",
        style: "outline",
        size: ["medium", "iconMedium"],
        className: "border-2",
      },
      {
        tone: "success",
        style: "outline",
        size: ["large", "iconLarge"],
        className: "border-4",
      },
      {
        tone: "success",
        style: "ghost",
        className: "text-success hover:surface-bright active:bg-surface-dim",
      },
      {
        tone: "success",
        style: "ghost",
        size: ["small", "iconSmall"],
        className: "hover:raised-1 active:inset-shadow-1-shadow",
      },
      {
        tone: "success",
        style: "ghost",
        size: ["medium", "iconMedium"],
        className: "hover:raised-2 active:inset-shadow-2-shadow",
      },
      {
        tone: "success",
        style: "ghost",
        size: ["large", "iconLarge"],
        className: "hover:raised-4 active:inset-shadow-3-shadow",
      },
      // Warning variants
      {
        tone: "warning",
        style: "solid",
        className: "bg-warning text-on-warning",
      },
      {
        tone: "warning",
        style: "solid",
        size: ["small", "iconSmall"],
        className: "raised-1 hover:raised-2 active:inset-shadow-1-shadow",
      },
      {
        tone: "warning",
        style: "solid",
        size: ["medium", "iconMedium"],
        className: "raised-2 hover:raised-4 active:inset-shadow-2-shadow",
      },
      {
        tone: "warning",
        style: "solid",
        size: ["large", "iconLarge"],
        className: "raised-4 hover:raised-8 active:inset-shadow-3-shadow",
      },
      {
        tone: "warning",
        style: "outline",
        className:
          "border-warning text-warning hover:text-on-warning-container hover:bg-warning-container active:bg-transparent",
      },
      {
        tone: "warning",
        style: "outline",
        size: ["small", "iconSmall"],
        className: "border-1",
      },
      {
        tone: "warning",
        style: "outline",
        size: ["medium", "iconMedium"],
        className: "border-2",
      },
      {
        tone: "warning",
        style: "outline",
        size: ["large", "iconLarge"],
        className: "border-4",
      },
      {
        tone: "warning",
        style: "ghost",
        className: "text-warning hover:surface-bright active:bg-surface-dim",
      },
      {
        tone: "warning",
        style: "ghost",
        size: ["small", "iconSmall"],
        className: "hover:raised-1 active:inset-shadow-1-shadow",
      },
      {
        tone: "warning",
        style: "ghost",
        size: ["medium", "iconMedium"],
        className: "hover:raised-2 active:inset-shadow-2-shadow",
      },
      {
        tone: "warning",
        style: "ghost",
        size: ["large", "iconLarge"],
        className: "hover:raised-4 active:inset-shadow-3-shadow",
      },
      // Destructive variants
      {
        tone: "destructive",
        style: "solid",
        className: "bg-error text-on-error",
      },
      {
        tone: "destructive",
        style: "solid",
        size: ["small", "iconSmall"],
        className: "raised-1 hover:raised-2 active:inset-shadow-1-shadow",
      },
      {
        tone: "destructive",
        style: "solid",
        size: ["medium", "iconMedium"],
        className: "raised-2 hover:raised-4 active:inset-shadow-2-shadow",
      },
      {
        tone: "destructive",
        style: "solid",
        size: ["large", "iconLarge"],
        className: "raised-4 hover:raised-8 active:inset-shadow-3-shadow",
      },
      {
        tone: "destructive",
        style: "outline",
        className:
          "border-error text-error hover:text-on-error-container hover:bg-error-container active:bg-transparent",
      },
      {
        tone: "destructive",
        style: "outline",
        size: ["small", "iconSmall"],
        className: "border-1",
      },
      {
        tone: "destructive",
        style: "outline",
        size: ["medium", "iconMedium"],
        className: "border-2",
      },
      {
        tone: "destructive",
        style: "outline",
        size: ["large", "iconLarge"],
        className: "border-4",
      },
      {
        tone: "destructive",
        style: "ghost",
        className: "text-error hover:surface-bright active:bg-surface-dim",
      },
      {
        tone: "destructive",
        style: "ghost",
        size: ["small", "iconSmall"],
        className: "hover:raised-1 active:inset-shadow-1-shadow",
      },
      {
        tone: "destructive",
        style: "ghost",
        size: ["medium", "iconMedium"],
        className: "hover:raised-2 active:inset-shadow-2-shadow",
      },
      {
        tone: "destructive",
        style: "ghost",
        size: ["large", "iconLarge"],
        className: "hover:raised-4 active:inset-shadow-3-shadow",
      },
      // Neutral variants
      {
        tone: "neutral",
        style: "solid",
        className: "bg-surface-container text-on-surface",
      },
      {
        tone: "neutral",
        style: "solid",
        size: ["small", "iconSmall"],
        className: "raised-1 hover:raised-2 active:inset-shadow-1-shadow",
      },
      {
        tone: "neutral",
        style: "solid",
        size: ["medium", "iconMedium"],
        className: "raised-2 hover:raised-4 active:inset-shadow-2-shadow",
      },
      {
        tone: "neutral",
        style: "solid",
        size: ["large", "iconLarge"],
        className: "raised-4 hover:raised-8 active:inset-shadow-3-shadow",
      },
      {
        tone: "neutral",
        style: "outline",
        className:
          "border-outline text-on-surface hover:text-on-surface hover:bg-surface-container-high active:bg-transparent",
      },
      {
        tone: "neutral",
        style: "outline",
        size: ["small", "iconSmall"],
        className: "border-1",
      },
      {
        tone: "neutral",
        style: "outline",
        size: ["medium", "iconMedium"],
        className: "border-2",
      },
      {
        tone: "neutral",
        style: "outline",
        size: ["large", "iconLarge"],
        className: "border-4",
      },
      {
        tone: "neutral",
        style: "ghost",
        className: "text-on-surface hover:surface-bright active:bg-surface-dim",
      },
      {
        tone: "neutral",
        style: "ghost",
        size: ["small", "iconSmall"],
        className: "hover:raised-1 active:inset-shadow-1-shadow",
      },
      {
        tone: "neutral",
        style: "ghost",
        size: ["medium", "iconMedium"],
        className: "hover:raised-2 active:inset-shadow-2-shadow",
      },
      {
        tone: "neutral",
        style: "ghost",
        size: ["large", "iconLarge"],
        className: "hover:raised-4 active:inset-shadow-3-shadow",
      },
    ],
  }
);

export interface ButtonExtendedProps
  extends Omit<React.ComponentProps<"button">, "style">,
    VariantProps<typeof buttonVariants> {
  style?: "solid" | "outline" | "ghost";
}
