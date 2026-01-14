import { NavigationMenu as BaseNavigationMenu } from "@base-ui/react/navigation-menu"
import { CaretDownIcon } from "@phosphor-icons/react"
import { cn } from "@/utils/cn"
import type { NavigationMenuIconProps } from "./navigation-menu.types"

export const NavigationMenuIcon = ({
	className,
	children,
	ref,
	...props
}: NavigationMenuIconProps) => {
	return (
		<BaseNavigationMenu.Icon
			className={cn(
				"transition-transform duration-200 ease-in-out data-popup-open:rotate-180",
				className,
			)}
			ref={ref}
			{...props}
		>
			<CaretDownIcon weight="bold" />
		</BaseNavigationMenu.Icon>
	)
}
