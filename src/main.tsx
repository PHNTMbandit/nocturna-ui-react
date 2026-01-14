import React from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"
import { CommandIcon, MagnifyingGlassIcon } from "@phosphor-icons/react"
import { Badge, Input } from "./components"

const rootElement = document.getElementById("root")

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<main className="p-2xl">
				<Input leadingIcon={MagnifyingGlassIcon} placeholder="Testing now...">
					<Badge>
						<CommandIcon weight="bold" />K
					</Badge>
				</Input>
			</main>
		</React.StrictMode>,
	)
}
