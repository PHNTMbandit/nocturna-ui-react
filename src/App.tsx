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

	const tones = [
		"primary",
		"secondary",
		"accent",
		"neutral",
		"error",
		"success",
		"warning",
		"glass",
	] as const
	const styles = ["solid", "outline", "ghost"] as const
	const sizes = ["small", "medium", "large"] as const
	const iconSizes = ["iconSmall", "iconMedium", "iconLarge"] as const

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
					Strata UI Button Showcase
				</h1>
				<div className="flex gap-sm">
					<Button size="small" tone="neutral" onClick={() => setTheme("light")}>
						Light Theme
					</Button>
					<Button
						size="small"
						tone="neutral"
						style="outline"
						onClick={() => setTheme("dark")}
					>
						Dark Theme
					</Button>
					<Button
						size="small"
						tone="neutral"
						style="ghost"
						onClick={() => setTheme("system")}
					>
						System Theme
					</Button>
				</div>
			</div>

			{/* Regular Buttons by Tone and Style */}
			{tones.map((tone) => (
				<div key={tone} className="space-y-lg">
					<h2 className="style-text-strong-2 text-on-surface capitalize">
						{tone} Buttons
					</h2>

					{styles.map((style) => (
						<div key={`${tone}-${style}`} className="space-y-sm">
							<h3 className="style-text-strong-1 text-on-surface-variant capitalize">
								{style} Style
							</h3>

							{/* All sizes in a row */}
							<div className="flex flex-wrap items-center gap-md">
								{sizes.map((size) => (
									<Button
										key={`${tone}-${style}-${size}`}
										tone={tone}
										style={style}
										size={size}
									>
										{size.charAt(0).toUpperCase() + size.slice(1)}
									</Button>
								))}
							</div>
						</div>
					))}
				</div>
			))}

			{/* Icon Buttons */}
			<div className="space-y-lg">
				<h2 className="style-text-strong-2 text-on-surface">Icon Buttons</h2>

				{tones.map((tone) => (
					<div key={`icon-${tone}`} className="space-y-sm">
						<h3 className="style-text-strong-1 text-on-surface-variant capitalize">
							{tone} Icon Buttons
						</h3>

						{styles.map((style) => (
							<div key={`icon-${tone}-${style}`} className="space-y-xs">
								<h4 className="style-text-default--1 text-on-surface-variant capitalize">
									{style}
								</h4>
								<div className="flex items-center gap-sm">
									{iconSizes.map((size) => (
										<Button
											key={`icon-${tone}-${style}-${size}`}
											tone={tone}
											style={style}
											size={size}
											className="shadow"
										>
											<svg
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="currentColor"
											>
												<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
											</svg>
										</Button>
									))}
								</div>
							</div>
						))}
					</div>
				))}
			</div>

			{/* Interactive States Demo */}
			<div className="space-y-lg">
				<h2 className="style-text-strong-2 text-on-surface">
					Interactive States
				</h2>
				<div className="space-y-md">
					<div className="space-y-xs">
						<h3 className="style-text-strong-1 text-on-surface-variant">
							Hover Effects
						</h3>
						<div className="flex flex-wrap gap-md">
							<Button tone="primary" className="shadow">
								Normal
							</Button>
							<Button tone="primary" className="shadow hover:shadow-lg">
								With Hover Shadow
							</Button>
							<Button tone="secondary" style="outline" className="shadow">
								Outline Hover
							</Button>
							<Button tone="accent" style="ghost" className="shadow">
								Ghost Hover
							</Button>
						</div>
					</div>

					<div className="space-y-xs">
						<h3 className="style-text-strong-1 text-on-surface-variant">
							Disabled State
						</h3>
						<div className="flex flex-wrap gap-md">
							<Button tone="primary" disabled className="shadow">
								Disabled Solid
							</Button>
							<Button
								tone="secondary"
								style="outline"
								disabled
								className="shadow"
							>
								Disabled Outline
							</Button>
							<Button tone="accent" style="ghost" disabled className="shadow">
								Disabled Ghost
							</Button>
						</div>
					</div>
				</div>
			</div>

			{/* Shadow Combinations Demo */}
			<div className="space-y-lg">
				<h2 className="style-text-strong-2 text-on-surface">
					Shadow & Raised Effects
				</h2>
				<div className="grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-3">
					<Button tone="primary" className="raised-sm shadow">
						Raised Small
					</Button>
					<Button tone="secondary" className="raised-md shadow">
						Raised Medium
					</Button>
					<Button tone="accent" className="raised-lg shadow">
						Raised Large
					</Button>
					<Button tone="success" className="shadow shadow-lg">
						Drop Shadow
					</Button>
					<Button tone="warning" className="raised-md shadow shadow-md">
						Both Effects
					</Button>
					<Button
						tone="error"
						className="raised-lg shadow shadow-xl hover:shadow-2xl"
					>
						Complex Shadow
					</Button>
				</div>
			</div>
		</div>
	)
}
