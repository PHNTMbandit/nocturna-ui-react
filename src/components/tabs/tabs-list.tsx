import { Tabs as SwitchTabs } from "@base-ui/react/tabs"
import { useContext } from "react"
import { cn } from "@/utils/cn"
import { type TabsListProps, TabsOrientationContext } from "./tabs.types"

export const TabsList = ({ className, ...props }: TabsListProps) => {
	const orientation = useContext(TabsOrientationContext)

	if (orientation === "horizontal") {
		return (
			<SwitchTabs.List
				className={cn(
					"relative inset-shadow-sm z-0 flex flex-col gap-xs overflow-hidden rounded-full bg-surface-dim px-xs",
					className,
				)}
				{...props}
			/>
		)
	}

	return (
		<SwitchTabs.List
			className={cn(
				"relative inset-shadow-sm z-0 flex w-full gap-xs overflow-hidden rounded-full bg-surface-dim",
				className,
			)}
			{...props}
		/>
	)
}
