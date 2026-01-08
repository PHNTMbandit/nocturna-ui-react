import { Toast as BaseToast } from "@base-ui/react/toast"
import type * as React from "react"
import { cn } from "@/utils/cn"
import { Button } from "./components"

type AppProps = React.ComponentProps<"div">

export const App = ({ className, children, ref, ...props }: AppProps) => {
	const toast = BaseToast.useToastManager()
	const html = document.documentElement
	document.documentElement.removeAttribute("data-theme")
	const savedTheme = localStorage.getItem("theme")
	if (savedTheme) {
		html.setAttribute("data-theme", savedTheme)
	}

	const setTheme = (theme: string) => {
		const savedTheme = localStorage.getItem("theme")
		if (savedTheme) {
			html.setAttribute("data-theme", savedTheme)
		}

		if (theme === "dark") {
			html.setAttribute("data-theme", "dark")
			localStorage.setItem("theme", "dark")
		}
		if (theme === "light") {
			html.setAttribute("data-theme", "light")
			toast.add({
				title: "Dark theme activated",
				description: "You have switched to dark theme.",
				data: { variant: "success" },
			})
			localStorage.setItem("theme", "light")
		}
	}

	return (
		<div
			className={cn("min-h-screen space-y-2xl bg-surface p-lg", className)}
			ref={ref}
			{...props}
		>
			{children}

			{/* Theme Controls */}
			<div className="space-y-md">
				<h1 className="style-text-strong-3 text-on-surface">
					suwa UI Badge Showcase
				</h1>
				<div className="flex gap-sm">
					<Button onClick={() => setTheme("light")} size="small" tone="neutral">
						Light Theme
					</Button>
					<Button
						onClick={() => setTheme("dark")}
						size="small"
						style="outline"
						tone="neutral"
					>
						Dark Theme
					</Button>
					<Button
						onClick={() => setTheme("system")}
						size="small"
						style="ghost"
						tone="neutral"
					>
						System Theme
					</Button>
				</div>
			</div>
		</div>
	)
}
