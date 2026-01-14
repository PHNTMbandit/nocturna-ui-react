import type { Accordion as BaseAccordion } from "@base-ui/react/accordion"
import type { Icon } from "@phosphor-icons/react"
import { cva, type VariantProps } from "class-variance-authority"
import type React from "react"

export type AccordionProps = React.ComponentProps<typeof BaseAccordion.Root>
export type AccordionPanelProps = React.ComponentProps<
	typeof BaseAccordion.Panel
> & {
	heading?: string
}

export const accordionItemVariants = cva(
	"group transition-all [&:not([data-open])]:hover:inset-shadow-raised-xs [&:not([data-open])]:hover:shadow-xs hover:bg-surface-container-mid data-open:bg-surface-container-mid data-open:shadow-md data-open:inset-shadow-raised-md data-open:hover:bg-surface-container-high data-open:hover:shadow-lg data-open:hover:inset-shadow-raised-lg hover:rounded-lg data-open:rounded-lg",
	{
		variants: {
			tone: {
				primary:
					"[&_[data-icon]]:text-primary [&_[data-panel]]:bg-primary-container [&_h1,h2,h3,h4,h5,h6]:text-on-primary-container-variant [&_p]:text-on-primary-container",
				secondary:
					"[&_[data-icon]]:text-secondary [&_[data-panel]]:bg-secondary-container [&_h1,h2,h3,h4,h5,h6]:text-on-secondary-container-variant [&_p]:text-on-secondary-container",
				accent:
					"[&_[data-icon]]:text-accent [&_[data-panel]]:bg-accent-container [&_h1,h2,h3,h4,h5,h6]:text-on-accent-container-variant [&_p]:text-on-accent-container",
				neutral:
					"[&_[data-icon]]:text-on-surface [&_[data-panel]]:bg-surface-dim [&_h1,h2,h3,h4,h5,h6]:text-on-surface-variant [&_p]:text-on-surface",
				error:
					"[&_[data-icon]]:text-error [&_[data-panel]]:bg-error-container [&_h1,h2,h3,h4,h5,h6]:text-on-error-container-variant [&_p]:text-on-error-container",
				success:
					"[&_[data-icon]]:text-success [&_[data-panel]]:bg-success-container [&_h1,h2,h3,h4,h5,h6]:text-on-success-container-variant [&_p]:text-on-success-container",
				warning:
					"[&_[data-icon]]:text-warning [&_[data-panel]]:bg-warning-container [&_h1,h2,h3,h4,h5,h6]:text-on-warning-container-variant [&_p]:text-on-warning-container",
			},
		},
		defaultVariants: {
			tone: "neutral",
		},
	},
)

export type AccordionItemProps = Omit<
	React.ComponentProps<typeof BaseAccordion.Item>,
	"style"
> &
	VariantProps<typeof accordionItemVariants> &
	React.ComponentProps<typeof BaseAccordion.Trigger>

export type AccordionTriggerProps = React.ComponentProps<
	typeof BaseAccordion.Trigger
> & {
	title: string
	subtitle?: string
	icon?: Icon
}
