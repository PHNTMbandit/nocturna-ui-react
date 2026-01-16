import React from "react"
import { cn } from "@/utils/cn"

type SidebarContextProps = React.ComponentProps<"div"> & {
	defaultOpen?: boolean
	open?: boolean
	setOpen?: (open: boolean) => void
	trigger?: () => void
	side?: "left" | "right"
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

export const SidebarProvider = ({
	defaultOpen = true,
	side = "left",
	className,
	children,
	ref,
	...props
}: SidebarContextProps) => {
	const [open, setOpen] = React.useState<boolean>(defaultOpen)

	const trigger = () => setOpen(!open)

	return (
		<SidebarContext.Provider
			value={{ defaultOpen, open, setOpen, side, trigger }}
		>
			<div
				className={cn(
					"h-full w-full",
					side === "left" ? "flex flex-row" : "flex flex-row-reverse",
					className,
				)}
				ref={ref}
				{...props}
			>
				{children}
			</div>
		</SidebarContext.Provider>
	)
}

export const useSidebar = () => {
	const context = React.useContext(SidebarContext)
	if (!context) {
		throw new Error("useSidebar must be used within a SidebarProvider")
	}
	return context
}
