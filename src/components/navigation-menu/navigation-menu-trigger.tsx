import { NavigationMenu as BaseNavigationMenu } from "@base-ui/react/navigation-menu"
import { cn } from "@/utils/cn"
import type { NavigationMenuTriggerProps } from "./navigation-menu.types"

export const NavigationMenuTrigger = ({
	className,
	children,
	ref,
	...props
}: NavigationMenuTriggerProps) => {
	return (
		<BaseNavigationMenu.Trigger
			className={cn(
				"style-text-default-0 flex items-center gap-2xs rounded-full px-sm py-xs transition-all hover:cursor-pointer data-popup-open:inset-shadow-raised-sm data-popup-open:bg-surface-bright data-popup-open:shadow-sm",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</BaseNavigationMenu.Trigger>
	)
}
