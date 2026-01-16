import { cn } from "@/utils/cn"
import type { SidebarMenuProps } from "./sidebar.types"

export const SidebarMenu = ({
	className,
	children,
	ref,
	...props
}: SidebarMenuProps) => {
	return (
		<div
			className={cn("flex flex-col gap-2xs last:pb-xs", className)}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	)
}
