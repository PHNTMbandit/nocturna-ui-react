import { NavigationMenu as BaseNavigationMenu } from "@base-ui/react/navigation-menu"
import { cn } from "@/utils/cn"
import type { NavigationMenuLinkProps } from "./navigation-menu.types"

export const NavigationMenuLink = ({
	className,
	children,
	ref,
	...props
}: NavigationMenuLinkProps) => {
	return (
		<BaseNavigationMenu.Link
			className={cn("", className)}
			ref={ref}
			{...props}
			render={
				<div className="rounded-xl p-xs transition-colors hover:cursor-pointer hover:bg-surface-dim">
					{children}
				</div>
			}
		/>
	)
}
