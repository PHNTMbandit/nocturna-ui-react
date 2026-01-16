import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible"
import { CaretRightIcon } from "@phosphor-icons/react"
import { cn } from "@/utils/cn"
import {
	type SidebarSubMenuTriggerProps,
	sidebarSubMenuTriggerVariants,
} from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const SidebarSubMenuTrigger = ({
	leadingIcon: Icon,
	label,
	size,
	className,
	children,
	ref,
	...props
}: SidebarSubMenuTriggerProps) => {
	const { open } = useSidebar()

	return (
		<BaseCollapsible.Trigger
			className={cn(
				sidebarSubMenuTriggerVariants({
					size: open ? size : "compact",
					className,
				}),
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
			<CaretRightIcon
				className="size-xs transition-all ease-out group-data-panel-open:rotate-90"
				weight="bold"
			/>
		</BaseCollapsible.Trigger>
	)
}
