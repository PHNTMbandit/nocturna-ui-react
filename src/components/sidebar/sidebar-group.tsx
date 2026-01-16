import { cn } from "@/utils/cn"
import type { SidebarGroupProps } from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const SidebarGroup = ({
	className,
	children,
	ref,
	...props
}: SidebarGroupProps) => {
	const { open } = useSidebar()

	return (
		<div
			className={cn("flex flex-col gap-xs", open ? "" : "", className)}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	)
}
