import { cn } from "@/utils/cn"
import type { SidebarProps } from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const Sidebar = ({
	className,
	children,
	ref,
	...props
}: SidebarProps) => {
	const { open } = useSidebar()

	return (
		<div
			className={cn(
				"flex h-full w-1/5 flex-col justify-between overflow-hidden border-outline-variant border-r bg-surface-bright",
				className,
				open ? "gap-xl" : "w-fit gap-sm",
			)}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	)
}
