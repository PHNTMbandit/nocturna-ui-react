import { Accordion as BaseAccordion } from "@base-ui/react/accordion"
import { cn } from "@/utils/cn"
import {
	type AccordionItemProps,
	accordionItemVariants,
} from "./accordion.types"

export const AccordionItem = ({
	tone,
	className,
	children,
	ref,
	...props
}: AccordionItemProps) => {
	return (
		<BaseAccordion.Item
			className={cn(accordionItemVariants({ className, tone }))}
			ref={ref}
			{...props}
		>
			<BaseAccordion.Header>{children}</BaseAccordion.Header>
		</BaseAccordion.Item>
	)
}
