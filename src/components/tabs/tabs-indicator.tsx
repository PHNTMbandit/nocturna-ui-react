import { Tabs as SwitchTabs } from "@base-ui/react/tabs"
import { useContext } from "react"
import { cn } from "@/utils/cn"
import { type TabsIndicatorProps, TabsOrientationContext } from "./tabs.types"

export const TabsIndicator = ({ className, ...props }: TabsIndicatorProps) => {
	const orientation = useContext(TabsOrientationContext)

	if (orientation === "horizontal") {
		return (
			<SwitchTabs.Indicator
				className={cn(
					"absolute inset-shadow-raised-md top-0 left-1/2 z-[-1] h-(--active-tab-height) w-(--active-tab-width) -translate-x-1/3 translate-y-(--active-tab-top) rounded-full bg-primary shadow-md transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]",
					className,
				)}
				{...props}
			/>
		)
	}

	return (
		<SwitchTabs.Indicator
			className={cn(
				"absolute inset-shadow-raised-md top-1/2 left-0 z-[-1] h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) -translate-y-1/2 rounded-full bg-primary shadow-md transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]",
				className,
			)}
			{...props}
		/>
	)
}
