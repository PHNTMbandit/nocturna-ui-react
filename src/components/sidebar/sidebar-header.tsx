import { cn } from "@/utils/cn"
import type { SidebarHeaderProps } from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const SidebarHeader = ({
	className,
	children,
	ref,
	...props
}: SidebarHeaderProps) => {
	const { open } = useSidebar()

	return (
		<div
			className={cn(
				"",
				open ? "px-xl pt-xl" : "max-w-2xl overflow-hidden p-sm",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	)
}
