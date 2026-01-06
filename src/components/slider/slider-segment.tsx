"use no memo"

import { cn } from "@/utils/cn"
import type { SliderSegmentProps } from "./slider.types"

export const SliderSegment = ({
	index,
	steps,
	left,
	width,
	className,
	children,
	ref,
	...props
}: SliderSegmentProps) => {
	return (
		<div
			className={cn(
				"absolute inset-shadow-xs h-full rounded-full bg-primary",
				className,
			)}
			ref={ref}
			style={{
				background: `${
					index === steps - 1 ? "transparent" : "var(--color-primary)"
				}`,
				left: `${left}%`,
				width: `${width}%`,
			}}
			{...props}
		>
			{children}
		</div>
	)
}
