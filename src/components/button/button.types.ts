import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import type { ComponentProps } from "react"

export const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-full select-none transition-all disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
	{
		variants: {
			tone: {
				primary: "",
				secondary: "",
				accent: "",
				neutral: "",
				error: "",
				success: "",
				warning: "",
				glass: "",
			},
			style: {
				solid: "not-active:hover:-translate-y-3xs active:text-opacity-50",
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
			// === GENERAL STYLE/SIZE VARIANTS ===
			// Solid style shadow effects
			{
				style: "solid",
				size: ["small", "iconSmall"],
				className:
					"not-active:inset-shadow-raised-sm not-active:shadow-sm not-active:hover:shadow-md active:inset-shadow-sm",
			},
			{
				style: "solid",
				size: ["medium", "iconMedium"],
				className:
					"not-active:inset-shadow-raised-md not-active:shadow-md not-active:hover:shadow-lg active:inset-shadow-md",
			},
			{
				style: "solid",
				size: ["large", "iconLarge"],
				className:
					"not-active:inset-shadow-raised-lg not-active:shadow-lg not-active:hover:shadow-xl active:inset-shadow-lg",
			},
			// Outline style borders
			{
				style: "outline",
				size: ["small", "iconSmall"],
				className: "border-1",
			},
			{
				style: "outline",
				size: ["medium", "iconMedium"],
				className: "border-2",
			},
			{
				style: "outline",
				size: ["large", "iconLarge"],
				className: "border-4",
			},
			// Ghost style shadow effects
			{
				style: "ghost",
				size: ["small", "iconSmall"],
				className:
					"not-active:hover:bg-surface-bright not-active:hover:inset-shadow-raised-sm not-active:hover:shadow-sm active:bg-surface-dim active:inset-shadow-sm",
			},
			{
				style: "ghost",
				size: ["medium", "iconMedium"],
				className:
					"not-active:hover:bg-surface-bright not-active:hover:inset-shadow-raised-md not-active:hover:shadow-md active:bg-surface-dim active:inset-shadow-md",
			},
			{
				style: "ghost",
				size: ["large", "iconLarge"],
				className:
					"not-active:hover:bg-surface-bright not-active:hover:inset-shadow-raised-lg not-active:hover:shadow-lg active:bg-surface-dim active:inset-shadow-lg",
			},
			// === PRIMARY TONE ===
			// Primary solid
			{
				tone: "primary",
				style: "solid",
				className: "bg-primary text-on-primary active:text-on-primary/70",
			},
			// Primary outline
			{
				tone: "primary",
				style: "outline",
				className:
					"border-primary text-primary hover:text-on-primary-container hover:bg-primary-container active:bg-transparent",
			},
			// Primary ghost
			{
				tone: "primary",
				style: "ghost",
				className: "text-primary hover:surface-bright active:bg-surface-dim",
			},
			// === SECONDARY TONE ===
			// Secondary solid
			{
				tone: "secondary",
				style: "solid",
				className: "bg-secondary text-on-secondary active:text-on-secondary/70",
			},
			// Secondary outline
			{
				tone: "secondary",
				style: "outline",
				className:
					"border-secondary text-secondary hover:text-on-secondary-container hover:bg-secondary-container active:bg-transparent",
			},
			// Secondary ghost
			{
				tone: "secondary",
				style: "ghost",
				className: "text-secondary hover:surface-bright active:bg-surface-dim",
			},
			// === ACCENT TONE ===
			// Accent solid
			{
				tone: "accent",
				style: "solid",
				className: "bg-accent text-on-accent active:text-on-accent/70",
			},
			// Accent outline
			{
				tone: "accent",
				style: "outline",
				className:
					"border-accent text-accent hover:text-on-accent-container hover:bg-accent-container active:bg-transparent",
			},
			// Accent ghost
			{
				tone: "accent",
				style: "ghost",
				className: "text-accent hover:surface-bright active:bg-surface-dim",
			},

			// === NEUTRAL TONE ===
			// Neutral solid
			{
				tone: "neutral",
				style: "solid",
				className:
					"bg-surface-container text-on-surface active:text-on-surface/70",
			},
			// Neutral outline
			{
				tone: "neutral",
				style: "outline",
				className:
					"border-outline text-on-surface hover:text-on-surface hover:bg-surface-container-high active:bg-transparent",
			},
			// Neutral ghost
			{
				tone: "neutral",
				style: "ghost",
				className: "text-on-surface hover:surface-bright active:bg-surface-dim",
			},
			// === ERROR TONE ===
			// Error solid
			{
				tone: "error",
				style: "solid",
				className: "bg-error text-on-error active:text-on-error/70",
			},
			// Error outline
			{
				tone: "error",
				style: "outline",
				className:
					"border-error text-error hover:text-on-error-container hover:bg-error-container active:bg-transparent",
			},
			// Error ghost
			{
				tone: "error",
				style: "ghost",
				className: "text-error hover:surface-bright active:bg-surface-dim",
			},
			// === SUCCESS TONE ===
			// Success solid
			{
				tone: "success",
				style: "solid",
				className: "bg-success text-on-success active:text-on-success/70",
			},
			// Success outline
			{
				tone: "success",
				style: "outline",
				className:
					"border-success text-success hover:text-on-success-container hover:bg-success-container active:bg-transparent",
			},
			// Success ghost
			{
				tone: "success",
				style: "ghost",
				className: "text-success hover:surface-bright active:bg-surface-dim",
			},
			// === WARNING TONE ===
			// Warning solid
			{
				tone: "warning",
				style: "solid",
				className: "bg-warning text-on-warning active:text-on-warning/70",
			},
			// Warning outline
			{
				tone: "warning",
				style: "outline",
				className:
					"border-warning text-warning hover:text-on-warning-container hover:bg-warning-container active:bg-transparent",
			},
			// Warning ghost
			{
				tone: "warning",
				style: "ghost",
				className: "text-warning hover:surface-bright active:bg-surface-dim",
			},
		],
	},
)

export interface ButtonExtendedProps
	extends Omit<ComponentProps<"button">, "style">,
		VariantProps<typeof buttonVariants> {
	style?: "solid" | "outline" | "ghost"
}
