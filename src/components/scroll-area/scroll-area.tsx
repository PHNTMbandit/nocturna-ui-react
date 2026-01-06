import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area"
import { cn } from "@/utils/cn"
import type { ScrollAreaProps } from "./scroll-area.types"

export const ScrollArea = ({
	orientation = "vertical",
	defaultHeight = 200,
	className,
	children,
	ref,
	...props
}: ScrollAreaProps) => {
	return (
		<BaseScrollArea.Root
			className={cn(
				className,
				`h-[${defaultHeight}px] rounded-lg bg-surface-container`,
				orientation === "horizontal" && "h-full",
			)}
			ref={ref}
			{...props}
		>
			<BaseScrollArea.Viewport
				className={
					"prose-step-0 inset-shadow-md flex h-full flex-col gap-xs overscroll-contain rounded-2xl bg-surface-dim py-2xs pr-md pl-sm"
				}
			>
				{children}
			</BaseScrollArea.Viewport>
			<BaseScrollArea.Scrollbar
				className={cn(
					"flex justify-center rounded opacity-0 transition-opacity delay-300 hover:cursor-pointer data-hovering:opacity-100 data-scrolling:opacity-100 data-hovering:delay-0 data-scrolling:delay-0 data-hovering:duration-75 data-scrolling:duration-75",
					orientation === "vertical" && "my-xs mr-2xs w-2xs",
					orientation === "horizontal" && "mx-xs mb-2xs h-2xs flex-col",
					className,
				)}
				orientation={orientation}
			>
				<BaseScrollArea.Thumb
					className={
						"inset-shadow-raised-xs h-full w-full rounded-full bg-accent shadow-xs"
					}
				/>
			</BaseScrollArea.Scrollbar>
			<BaseScrollArea.Corner />
		</BaseScrollArea.Root>
	)
}
