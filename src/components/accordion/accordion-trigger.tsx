import { Accordion as BaseAccordion } from "@base-ui/react/accordion"
import { CaretDownIcon } from "@phosphor-icons/react"
import { cn } from "@/utils/cn"
import type { AccordionTriggerProps } from "./accordion.types"

export const AccordionTrigger = ({
	title,
	subtitle,
	icon: Icon,
	className,
	children,
	ref,
	...props
}: AccordionTriggerProps) => {
	return (
		<BaseAccordion.Trigger
			className={cn(
				"peer flex w-full items-center gap-sm rounded-lg py-xs pr-sm pl-md transition-all group-hover:cursor-pointer data-panel-open:rounded-b-none",
				className,
			)}
			ref={ref}
			{...props}
		>
			{Icon && <Icon className="size-md" data-icon weight="bold" />}
			<div className="flex flex-col items-start justify-center">
				<span className="style-text-strong-1 text-on-surface">{title}</span>
				{subtitle && (
					<span className="style-text-prose--1 text-on-surface-variant">
						{subtitle}
					</span>
				)}
			</div>
			{children}
			<CaretDownIcon
				className="ml-auto size-sm text-on-surface-variant transition-transform group-data-panel-open:rotate-180"
				weight="bold"
			/>
		</BaseAccordion.Trigger>
	)
}
