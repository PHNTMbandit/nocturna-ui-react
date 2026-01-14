import { NavigationMenu as BaseNavigationMenu } from "@base-ui/react/navigation-menu"
import { cn } from "@/utils/cn"
import type { NavigationMenuViewportProps } from "./navigation-menu.types"

export const NavigationMenuViewport = ({
	className,
	children,
	ref,
	...props
}: NavigationMenuViewportProps) => {
	return (
		<BaseNavigationMenu.Portal>
			<BaseNavigationMenu.Positioner
				className={cn(
					"h-(--positioner-height) w-fit max-w-(--available-width) transition-[top,left,right,bottom] duration-(--duration) ease-(--easing) before:absolute before:content-[''] data-instant:transition-none data-[side=bottom]:before:top-[-10px] data-[side=left]:before:top-0 data-[side=right]:before:top-0 data-[side=bottom]:before:right-0 data-[side=left]:before:right-[-10px] data-[side=top]:before:right-0 data-[side=left]:before:bottom-0 data-[side=right]:before:bottom-0 data-[side=top]:before:bottom-[-10px] data-[side=bottom]:before:left-0 data-[side=right]:before:left-[-10px] data-[side=top]:before:left-0 data-[side=bottom]:before:h-2xs data-[side=top]:before:h-2xs data-[side=left]:before:w-2xs data-[side=right]:before:w-2xs",
					className,
				)}
				collisionAvoidance={{ side: "none" }}
				collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
				ref={ref}
				sideOffset={10}
				{...props}
				style={{
					["--duration" as string]: "0.35s",
					["--easing" as string]: "cubic-bezier(0.22, 1, 0.36, 1)",
				}}
			>
				<BaseNavigationMenu.Popup
					className={cn(
						"data-[ending-style]:easing-[ease] relative inset-shadow-raised-lg w-fit origin-(--transform-origin) rounded-3xl bg-surface-bright shadow-lg transition-[opacity,transform,scale] duration-(--duration) ease-(--easing) data-ending-style:scale-90 data-starting-style:scale-90 data-ending-style:opacity-0 data-starting-style:opacity-0 data-ending-style:duration-150",
					)}
				>
					<BaseNavigationMenu.Arrow className="flex transition-[left] duration-(--duration) ease-(--easing) data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=top]:bottom-[-8px] data-[side=right]:left-[-13px] data-[side=left]:rotate-90 data-[side=right]:-rotate-90 data-[side=top]:rotate-180" />
					<BaseNavigationMenu.Viewport className="relative w-full overflow-hidden">
						{children}
					</BaseNavigationMenu.Viewport>
				</BaseNavigationMenu.Popup>
			</BaseNavigationMenu.Positioner>
		</BaseNavigationMenu.Portal>
	)
}
