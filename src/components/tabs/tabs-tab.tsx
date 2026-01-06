import { Tabs as SwitchTabs } from "@base-ui/react/tabs"
import { cn } from "@/utils/cn"
import type { TabsTabProps } from "./tabs.types"

export const TabsTab = ({ className, ...props }: TabsTabProps) => {
	return (
		<SwitchTabs.Tab
			className={cn(
				"style-text-default-0 m-xs inline-flex h-xl w-full select-none items-center justify-center whitespace-nowrap break-keep rounded-full text-center text-on-surface outline-none transition-colors duration-300 hover:cursor-pointer hover:text-primary focus-visible:relative focus-visible:before:absolute focus-visible:before:outline data-active:text-on-primary",
				className,
			)}
			{...props}
		/>
	)
}
