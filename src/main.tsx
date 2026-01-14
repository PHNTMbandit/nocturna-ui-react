import React from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"
import { CheckCircleIcon } from "@phosphor-icons/react"
import {
	Accordion,
	AccordionItem,
	AccordionPanel,
	AccordionTrigger,
} from "./components"

const rootElement = document.getElementById("root")

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<main className="p-2xl">
				<Accordion>
					<AccordionItem>
						<AccordionTrigger
							icon={CheckCircleIcon}
							subtitle="This is the first item"
							title="First Item"
						/>
						<AccordionPanel heading="Details for First Item">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</AccordionPanel>
					</AccordionItem>
					<AccordionItem tone="primary">
						<AccordionTrigger
							icon={CheckCircleIcon}
							subtitle="This is the second item"
							title="Second Item"
						/>
						<AccordionPanel heading="Details for Second Item">
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>
					<AccordionItem tone="secondary">
						<AccordionTrigger
							icon={CheckCircleIcon}
							subtitle="This is the third item"
							title="Third Item"
						/>
						<AccordionPanel heading="Details for Third Item">
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>
					<AccordionItem tone="accent">
						<AccordionTrigger
							icon={CheckCircleIcon}
							subtitle="This is the fourth item"
							title="Fourth Item"
						/>
						<AccordionPanel heading="Details for Fourth Item">
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>
					<AccordionItem tone="error">
						<AccordionTrigger
							icon={CheckCircleIcon}
							subtitle="This is the fifth item"
							title="Fifth Item"
						/>
						<AccordionPanel heading="Details for Fifth Item">
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>
					<AccordionItem tone="success">
						<AccordionTrigger
							icon={CheckCircleIcon}
							subtitle="This is the sixth item"
							title="Sixth Item"
						/>
						<AccordionPanel heading="Details for Sixth Item">
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>
					<AccordionItem tone="warning">
						<AccordionTrigger
							icon={CheckCircleIcon}
							subtitle="This is the seventh item"
							title="Seventh Item"
						/>
						<AccordionPanel heading="Details for Seventh Item">
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</main>
		</React.StrictMode>,
	)
}
