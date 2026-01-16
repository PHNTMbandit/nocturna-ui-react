import type { Separator as BaseSeparator } from "@base-ui/react/separator"
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"

export const separatorVariants = cva("shrink-0 rounded-full transition-all", {
	variants: {
		tone: {
			default: "bg-outline",
			variant: "bg-outline-variant",
		},
		orientation: {
			horizontal: "w-full",
			vertical: "h-full",
		},
		thickness: {
			thick: "",
			medium: "",
			thin: "",
		},
	},
	defaultVariants: {
		tone: "default",
		orientation: "horizontal",
		thickness: "medium",
	},
	compoundVariants: [
		{
			orientation: "horizontal",
			thickness: "thick",
			className: "h-[4px]",
		},
		{
			orientation: "horizontal",
			thickness: "medium",
			className: "h-[2px]",
		},
		{
			orientation: "horizontal",
			thickness: "thin",
			className: "h-[1px]",
		},
		{
			orientation: "vertical",
			thickness: "thick",
			className: "w-[4px]",
		},
		{
			orientation: "vertical",
			thickness: "medium",
			className: "w-[2px]",
		},
		{
			orientation: "vertical",
			thickness: "thin",
			className: "w-[1px]",
		},
	],
})

export type SeparatorProps = Omit<
	ComponentProps<typeof BaseSeparator>,
	"style"
> &
	VariantProps<typeof separatorVariants>
