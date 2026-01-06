import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip"
import { cn } from "@/utils/cn"
import type { TooltipContentProps } from "./tooltip.types"

export const TooltipContent = ({
	alignOffset = 0,
	sideOffset = 5,
	className,
	children,
	...props
}: TooltipContentProps) => {
	return (
		<BaseTooltip.Portal>
			<BaseTooltip.Positioner sideOffset={sideOffset} alignOffset={alignOffset}>
				<BaseTooltip.Popup
					className={cn(
						"fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 inset-shadow-raised-xs z-50 w-fit origin-(--transform-origin) animate-in text-balance rounded-md bg-surface-container-high px-xs py-3xs text-sm shadow-xs data-[state=closed]:animate-out",
						className,
					)}
					{...props}
				>
					{/* <BaseTooltip.Arrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=top]:bottom-[-8px] data-[side=right]:left-[-13px] data-[side=left]:rotate-90 data-[side=right]:-rotate-90 data-[side=top]:rotate-180">
						<CaretUpIcon
							className="fill-surface-container-high"
							weight="fill"
						/>
					</BaseTooltip.Arrow> */}
					{children}
				</BaseTooltip.Popup>
			</BaseTooltip.Positioner>
		</BaseTooltip.Portal>
	)
}
