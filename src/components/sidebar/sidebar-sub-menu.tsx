import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible"
import { cn } from "@/utils/cn"
import type { SidebarSubMenuProps } from "./sidebar.types"

export const SidebarSubMenu = ({
	className,
	children,
	ref,
	...props
}: SidebarSubMenuProps) => {
	return (
		<BaseCollapsible.Root
			className={cn("flex flex-col justify-center gap-xs", className)}
			ref={ref}
			{...props}
		>
			{children}
		</BaseCollapsible.Root>
	)
}
