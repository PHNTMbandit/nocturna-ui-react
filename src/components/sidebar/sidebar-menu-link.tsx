import { cn } from "@/utils/cn"
import {
	type SidebarMenuLinkProps,
	sidebarMenuLinkVariants,
} from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const SidebarMenuLink = ({
	size,
	label,
	leadingIcon: Icon,
	className,
	children,
	ref,
	...props
}: SidebarMenuLinkProps) => {
	const { open } = useSidebar()

	return (
		<div
			className={cn(
				sidebarMenuLinkVariants({ size: open ? size : "compact", className }),
			)}
			ref={ref}
			{...props}
		>
			<div className="flex h-fit w-full items-center gap-xs">
				{Icon && (
					<Icon
						className="block size-sm shrink-0 group-data-active:hidden"
						weight="bold"
					/>
				)}
				{Icon && (
					<Icon
						className="hidden size-sm shrink-0 group-data-active:block"
						weight="fill"
					/>
				)}
				{open && (
					<span
						className={cn(
							"style-text-default-0",
							size === "compact" && "hidden",
						)}
					>
						{label}
					</span>
				)}
			</div>
			{open && children}
		</div>
	)
}
