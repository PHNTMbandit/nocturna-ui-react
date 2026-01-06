/** biome-ignore-all lint/suspicious/noArrayIndexKey: Just because */
"use no memo"

import type { Ranger } from "@tanstack/react-ranger"
import { useRanger } from "@tanstack/react-ranger"
import { useRef, useState } from "react"
import { cn } from "@/utils/cn"
import type { SliderProps } from "./slider.types"
import { SliderHandle } from "./slider-handle"
import { SliderSegment } from "./slider-segment"
import { SliderTick } from "./slider-tick"
import { SliderTickLabel } from "./slider-tick-label"
import { SliderTrack } from "./slider-track"

export const Slider = ({
	leadingIcon: LeadingIcon,
	trailingIcon: TrailingIcon,
	min,
	max,
	stepSize,
	defaultValues,
	showTickLabels,
	label,
	className,
	ref,
	...props
}: SliderProps) => {
	const sliderRef = useRef<HTMLDivElement>(null)
	const [values, setValues] = useState<ReadonlyArray<number>>(
		defaultValues || [50],
	)

	const sliderInstance = useRanger<HTMLDivElement>({
		getRangerElement: () => sliderRef.current,
		values,
		min: min ?? 0,
		max: max ?? 100,
		stepSize: stepSize ?? 1,
		onChange: (instance: Ranger<HTMLDivElement>) => {
			setValues(instance.sortedValues)
		},
	})

	return (
		<div className={cn("space-y-2xs", className)} ref={ref} {...props}>
			{label && (
				<p className="style-text-default--1 text-on-surface-variant">{label}</p>
			)}
			<div className="flex w-full items-center gap-sm">
				{LeadingIcon && <LeadingIcon className="size-sm" weight="bold" />}
				<SliderTrack sliderRef={sliderRef}>
					{showTickLabels &&
						sliderInstance.getTicks().map(({ value, key, percentage }) => (
							<SliderTick key={key} percentage={percentage}>
								<SliderTickLabel>{value}</SliderTickLabel>
							</SliderTick>
						))}
					{sliderInstance.getSteps().map(({ left, width }, index) => (
						<SliderSegment
							index={index}
							key={index}
							left={left}
							steps={sliderInstance.getSteps().length}
							width={width}
						/>
					))}
					{sliderInstance
						.handles()
						.map(
							(
								{
									isActive,
									onKeyDownHandler,
									onMouseDownHandler,
									onTouchStart,
									value,
								},
								index,
							) => (
								<SliderHandle
									isActive={isActive}
									key={index}
									onKeyDownHandler={onKeyDownHandler}
									onMouseDownHandler={onMouseDownHandler}
									onTouchStart={onTouchStart}
									sliderInstance={sliderInstance}
									value={value}
								/>
							),
						)}
				</SliderTrack>
				{TrailingIcon && <TrailingIcon className="size-sm" weight="bold" />}
				{values.map((value, index) => (
					<span className="style-text-default-0" key={index}>
						{value}
					</span>
				))}
			</div>
		</div>
	)
}
