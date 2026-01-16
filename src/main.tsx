import React from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"
import {
	CalendarIcon,
	GearIcon,
	HouseIcon,
	MagnifyingGlassIcon,
	MailboxIcon,
} from "@phosphor-icons/react"
import {
	Badge,
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuLink,
	SidebarSubMenu,
	SidebarSubMenuPanel,
	SidebarSubMenuTrigger,
} from "./components"
import { SidebarProvider } from "./components/sidebar/sidebar-provider"
import { SidebarToggle } from "./components/sidebar/sidebar-toggle"

const rootElement = document.getElementById("root")

const _items = [
	{
		title: "Home",
		url: "#",
		icon: HouseIcon,
		active: false,
	},
	{
		title: "Inbox",
		url: "#",
		icon: MailboxIcon,
		active: false,
	},
	{
		title: "Calendar",
		url: "#",
		icon: CalendarIcon,
		active: true,
	},
	{
		title: "Search",
		url: "#",
		icon: MagnifyingGlassIcon,
		active: false,
	},
	{
		title: "Settings",
		url: "#",
		icon: GearIcon,
		active: false,
	},
]

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<main className="h-screen w-full">
				<SidebarProvider>
					<Sidebar>
						<SidebarHeader className="flex items-center justify-between">
							<span className="style-text-strong-2">Suwa UI</span>
						</SidebarHeader>
						<SidebarContent>
							<SidebarGroup>
								<SidebarGroupContent>
									<SidebarMenu>
										<SidebarToggle />
										<SidebarMenuLink
											data-active={_items[0].active ? "" : undefined}
											label={_items[0].title}
											leadingIcon={_items[0].icon}
										>
											<Badge>4</Badge>
										</SidebarMenuLink>
									</SidebarMenu>
								</SidebarGroupContent>
							</SidebarGroup>
							<SidebarGroup>
								<SidebarGroupLabel>Group 1</SidebarGroupLabel>
								<SidebarGroupContent>
									<SidebarMenu>
										{_items.slice(1).map((_item) => (
											<SidebarMenuLink
												data-active={_item.active ? "" : undefined}
												key={_item.title}
												label={_item.title}
												leadingIcon={_item.icon}
											/>
										))}
									</SidebarMenu>
									<SidebarSubMenu>
										<SidebarSubMenuTrigger
											label={_items[1].title}
											leadingIcon={_items[1].icon}
										/>
										<SidebarSubMenuPanel>
											{_items.slice(1).map((_item) => (
												<SidebarMenuLink
													data-active={_item.active ? "" : undefined}
													key={_item.title}
													label={_item.title}
													leadingIcon={_item.icon}
												/>
											))}
										</SidebarSubMenuPanel>
									</SidebarSubMenu>
								</SidebarGroupContent>
							</SidebarGroup>
						</SidebarContent>
						<SidebarFooter>Footer content</SidebarFooter>
					</Sidebar>
					<div className="grow">Content goes here</div>
				</SidebarProvider>
			</main>
		</React.StrictMode>,
	)
}
