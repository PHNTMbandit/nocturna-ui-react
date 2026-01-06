import { Tabs as SwitchTabs } from "@base-ui/react/tabs"
import { useContext } from "react"
import { cn } from "@/utils/cn"
import { TabsOrientationContext, type TabsPanelProps } from "./tabs.types"

export const TabsPanel = ({ className, ...props }: TabsPanelProps) => {
	const orientation = useContext(TabsOrientationContext)

	return (
		<SwitchTabs.Panel
			className={cn(
				"relative rounded-xl bg-surface-neutral-primary-default",
				orientation === "horizontal" ? "h-full min-h-0 flex-1" : "grow",
				"flex items-center justify-start overflow-auto p-4",
				className,
			)}
			{...props}
		/>
	)
}
