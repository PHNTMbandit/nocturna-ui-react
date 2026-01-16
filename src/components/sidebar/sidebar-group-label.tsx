import { cn } from "@/utils/cn"
import type { SidebarGroupLabelProps } from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const SidebarGroupLabel = ({
	className,
	children,
	ref,
	...props
}: SidebarGroupLabelProps) => {
	const { open } = useSidebar()

	if (!open) {
		return null
	}

	return (
		<span
			className={cn(
				"style-text-default--2 pl-sm text-on-surface-variant uppercase",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</span>
	)
}
