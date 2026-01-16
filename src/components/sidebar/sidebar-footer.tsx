import { cn } from "@/utils/cn"
import type { SidebarFooterProps } from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const SidebarFooter = ({
	className,
	children,
	ref,
	...props
}: SidebarFooterProps) => {
	const { open } = useSidebar()

	return (
		<div
			className={cn(
				"",
				open ? "px-xl pb-xl" : "max-w-2xl overflow-hidden p-sm",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	)
}
