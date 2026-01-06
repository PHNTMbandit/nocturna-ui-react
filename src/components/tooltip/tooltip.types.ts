import type { Tooltip as BaseTooltip } from "@base-ui/react/tooltip"
import type { ComponentProps } from "react"

export type TooltipProps = ComponentProps<typeof BaseTooltip.Root>
export type TooltipTriggerProps = ComponentProps<typeof BaseTooltip.Trigger>
export type TooltipContentProps = ComponentProps<typeof BaseTooltip.Popup> & {
	alignOffset?: number
	sideOffset?: number
}
