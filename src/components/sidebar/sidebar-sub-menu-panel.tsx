import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible"
import { cn } from "@/utils/cn"
import type { SidebarSubMenuPanelProps } from "./sidebar.types"

export const SidebarSubMenuPanel = ({
	className,
	children,
	ref,
	...props
}: SidebarSubMenuPanelProps) => {
	return (
		<BaseCollapsible.Panel
			className={cn(
				"ml-md flex h-(--collapsible-panel-height) flex-col justify-end overflow-hidden border-outline border-l-2 pr-3xs text-sm transition-all duration-150 ease-out data-ending-style:h-[0px] data-starting-style:h-[0px] [&[hidden]:not([hidden='until-found'])]:hidden",
				className,
			)}
			ref={ref}
			{...props}
		>
			<div className="flex h-full flex-col gap-3xs border-outline py-3xs pl-2xs">
				{children}
			</div>
		</BaseCollapsible.Panel>
	)
}
