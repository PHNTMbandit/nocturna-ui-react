import { Accordion as BaseAccordion } from "@base-ui/react/accordion"
import { cn } from "@/utils/cn"
import type { AccordionPanelProps } from "./accordion.types"

export const AccordionPanel = ({
	heading,
	className,
	children,
	ref,
	...props
}: AccordionPanelProps) => {
	return (
		<BaseAccordion.Panel
			className={cn(
				"overflow-hidden rounded-b-lg",
				"h-(--accordion-panel-height)",
				"data-ending-style:h-[0px] data-starting-style:h-[0px]",
				"transition-all duration-300 ease-out",
				className,
			)}
			ref={ref}
			{...props}
		>
			<div className="px-sm pb-sm">
				<div
					className="inset-shadow-sm space-y-3xs rounded-md px-sm py-sm"
					data-panel
				>
					<h1 className="style-text-strong-0">{heading}</h1>
					<p className="style-text-prose-0">{children}</p>
				</div>
			</div>
		</BaseAccordion.Panel>
	)
}
