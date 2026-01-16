import { cn } from "@/utils/cn"
import type { SidebarGroupContentProps } from "./sidebar.types"

export const SidebarGroupContent = ({
	className,
	children,
	ref,
	...props
}: SidebarGroupContentProps) => {
	return (
		<div
			className={cn("flex flex-col gap-2xs", className)}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	)
}
