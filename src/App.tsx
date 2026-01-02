import type * as React from "react"
import { cn } from "@/utils/cn"
import { Button, Switch } from "./components"

type AppProps = React.ComponentProps<"div">

export const App = ({ className, children, ref, ...props }: AppProps) => {
	return (
		<div className={cn("", className)} ref={ref} {...props}>
			{children}
			<Button>Click Me</Button>
			<Button className="text-on-primary" tone={"error"}>
				Click Me
			</Button>
			<Switch />
		</div>
	)
}
