"use no memo"

import { cn } from "@/utils/cn"
import type { SliderTrackProps } from "./slider.types"

export const SliderTrack = ({
	className,
	children,
	sliderRef,
	...props
}: SliderTrackProps) => {
	return (
		<div
			className={cn(
				"relative inset-shadow-xs h-2xs grow rounded-full bg-surface-dim",
				className,
			)}
			ref={sliderRef}
			{...props}
		>
			{children}
		</div>
	)
}
