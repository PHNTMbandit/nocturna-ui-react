/** biome-ignore-all lint/a11y/noLabelWithoutControl: Just because */
import { cn } from "@/utils/cn"
import type { LabelProps } from "./label.types"

export const Label = ({ className, children, ref, ...props }: LabelProps) => {
	return (
		<label
			className={cn("style-text-default--1 hover:cursor-pointer", className)}
			data-slot="label"
			ref={ref}
			{...props}
		>
			{children}
		</label>
	)
}
