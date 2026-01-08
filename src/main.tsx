import React from "react"
import ReactDOM from "react-dom/client"
import { Button, Slider, ToastProvider } from "./components"
import "./styles.css"

const rootElement = document.getElementById("root")

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<ToastProvider>
				<main>
					<Button>Click me</Button>
					<Slider />
				</main>
			</ToastProvider>
		</React.StrictMode>,
	)
}
