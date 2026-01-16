import { cn } from "@/utils/cn"
import type { SidebarMenuButtonProps } from "./sidebar.types"

export const SidebarMenuButton = ({
	className,
	children,
	ref,
	...props
}: SidebarMenuButtonProps) => {
	return (
		<button
			className={cn("style-text-default-0 text-on-surface-variant", className)}
			ref={ref}
			{...props}
		>
			{children}
		</button>
	)
}
