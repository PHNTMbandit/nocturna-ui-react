import { Tabs as SwitchTabs } from "@base-ui/react/tabs"
import { useState } from "react"
import { cn } from "@/utils/cn"
import { TabsOrientationContext, type TabsProps } from "./tabs.types"

export const Tabs = ({ className, ref, ...props }: TabsProps) => {
	const [orientation, _setOrientation] = useState<"horizontal" | "vertical">(
		props.orientation ?? "vertical",
	)

	props.orientation = orientation
	if (props.orientation === "horizontal") {
		return (
			<TabsOrientationContext.Provider value={props.orientation}>
				<SwitchTabs.Root
					className={cn("flex gap-xs overflow-clip", className)}
					ref={ref}
					{...props}
				/>
			</TabsOrientationContext.Provider>
		)
	}

	return (
		<SwitchTabs.Root
			className={cn(
				"flex flex-col items-center gap-xs overflow-auto",
				className,
			)}
			ref={ref}
			{...props}
		/>
	)
}
