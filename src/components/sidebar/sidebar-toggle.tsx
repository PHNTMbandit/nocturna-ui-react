import { SidebarSimpleIcon } from "@phosphor-icons/react"
import { cn } from "@/utils/cn"
import { Button } from "../button"
import type { SidebarToggleProps } from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const SidebarToggle = ({
	className,
	children,
	ref,
	...props
}: SidebarToggleProps) => {
	const { trigger } = useSidebar()
	return (
		<Button
			className={cn("", className)}
			ref={ref}
			size={"iconMedium"}
			style="ghost"
			{...props}
			onClick={trigger}
		>
			{children}
			<SidebarSimpleIcon weight="bold" />
		</Button>
	)
}
