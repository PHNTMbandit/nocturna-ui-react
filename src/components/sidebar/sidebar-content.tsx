import { cn } from "@/utils/cn"
import type { SidebarContentProps } from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const SidebarContent = ({
	className,
	children,
	ref,
	...props
}: SidebarContentProps) => {
	const { open } = useSidebar()

	return (
		<div
			className={cn(
				"flex grow flex-col overflow-y-auto",
				open
					? "gap-xl pr-sm pl-lg"
					: "gap-xs divide-y divide-outline-variant pl-sm",
				className,
			)}
			ref={ref}
			style={{
				scrollbarGutter: "stable",
			}}
			{...props}
		>
			{children}
		</div>
	)
}
