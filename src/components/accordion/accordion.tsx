import { Accordion as BaseAccordion } from "@base-ui/react/accordion"
import { cn } from "@/utils/cn"
import type { AccordionProps } from "./accordion.types"

export const Accordion = ({
	className,
	children,
	ref,
	...props
}: AccordionProps) => {
	return (
		<BaseAccordion.Root
			className={cn("flex flex-col justify-center gap-2xs", className)}
			ref={ref}
			{...props}
		>
			{children}
		</BaseAccordion.Root>
	)
}
