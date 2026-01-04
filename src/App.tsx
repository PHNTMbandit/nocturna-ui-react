import type * as React from "react"
import { cn } from "@/utils/cn"
import { Button } from "./components"

type AppProps = React.ComponentProps<"div">

export const App = ({ className, children, ref, ...props }: AppProps) => {
	const setTheme = (theme: string) => {
		const html = document.documentElement
		document.documentElement.removeAttribute("data-theme")

		if (theme === "dark") {
			html.setAttribute("data-theme", "dark")
		}
		if (theme === "light") {
			html.setAttribute("data-theme", "light")
		}
	}

	return (
		<div className={cn("bg-primary", className)} ref={ref} {...props}>
			{children}
			<Button
				onClick={() => {
					setTheme("light")
				}}
			>
				Light
			</Button>
			<Button
				className="text-on-primary"
				onClick={() => setTheme("dark")}
				tone={"error"}
			>
				Dark
			</Button>
		</div>
	)
}
