"use no memo"

import { useState } from "react"
import { cn } from "@/utils/cn"
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip"
import type { SliderHandleProps } from "./slider.types"

export const SliderHandle = ({
	sliderInstance,
	isActive,
	onKeyDownHandler,
	onMouseDownHandler,
	onTouchStart,
	value,
	className,
	children,
	ref,
	...props
}: SliderHandleProps) => {
	const [isHovering, setIsHovering] = useState(false)

	return (
		<Tooltip open={isActive || isHovering} trackCursorAxis="x">
			<TooltipTrigger
				render={
					<button
						aria-valuemax={sliderInstance.options.max}
						aria-valuemin={sliderInstance.options.min}
						aria-valuenow={value}
						className={cn(
							"absolute inset-shadow-raised-xs top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary bg-surface-container-mid outline-none transition-[width,height,border] hover:cursor-pointer hover:border-2 active:border-2",
							isActive ? "size-md shadow-lg" : "size-sm shadow-xs",
							className,
						)}
						onKeyDown={onKeyDownHandler}
						onMouseDown={onMouseDownHandler}
						onMouseEnter={() => setIsHovering(true)}
						onMouseLeave={() => setIsHovering(false)}
						onTouchStart={onTouchStart}
						ref={ref}
						role="slider"
						style={{
							left: `${sliderInstance.getPercentageForValue(value)}%`,
							zIndex: isActive ? "1" : "0",
						}}
						{...props}
					>
						{children}
					</button>
				}
			/>
			<TooltipContent>
				<span>{value}</span>
			</TooltipContent>
		</Tooltip>
	)
}
