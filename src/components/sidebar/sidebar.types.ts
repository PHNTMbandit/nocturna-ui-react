import type { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible"
import type { Icon } from "@phosphor-icons/react"
import { cva, type VariantProps } from "class-variance-authority"
import type { ButtonExtendedProps } from "@/components/button/button.types"

export type SidebarToggleProps = ButtonExtendedProps
export type SidebarContentProps = React.ComponentProps<"div">
export type SidebarGroupContentProps = React.ComponentProps<"div">
export type SidebarGroupLabelProps = React.ComponentProps<"span">
export type SidebarGroupProps = React.ComponentProps<"div">
export type SidebarHeaderProps = React.ComponentProps<"div">
export type SidebarFooterProps = React.ComponentProps<"div">
export type SidebarMenuProps = React.ComponentProps<"div">
export type SidebarProps = React.ComponentProps<"div">
export type SidebarMenuButtonProps = React.ComponentProps<"button">
export type SidebarMenuLinkProps = React.ComponentProps<"div"> &
	VariantProps<typeof sidebarMenuLinkVariants> & {
		label: string
		leadingIcon?: Icon
	}

export type SidebarSubMenuProps = React.ComponentProps<
	typeof BaseCollapsible.Root
>
export type SidebarSubMenuTriggerProps = React.ComponentProps<
	typeof BaseCollapsible.Trigger
> &
	VariantProps<typeof sidebarSubMenuTriggerVariants> & {
		label: string
		leadingIcon?: Icon
	}

export type SidebarSubMenuPanelProps = React.ComponentProps<
	typeof BaseCollapsible.Panel
>

export const sidebarMenuLinkVariants = cva(
	"group inline-flex items-center justify-between rounded-full px-sm text-on-surface transition-all hover:inset-shadow-raised-sm hover:shadow-sm hover:cursor-pointer hover:bg-surface-bright not-active:hover:text-on-surface active:inset-shadow-sm active:bg-surface-dim data-active:pointer-events-none data-active:text-primary shrink-0",
	{
		variants: {
			size: {
				full: "w-full h-xl",
				compact: "size-xl",
			},
		},
		defaultVariants: {
			size: "full",
		},
	},
)

export const sidebarSubMenuTriggerVariants = cva(
	"group inline-flex items-center justify-between rounded-full px-sm text-on-surface transition-all hover:inset-shadow-raised-sm [&:not([data-panel-open])]:hover:shadow-sm hover:cursor-pointer hover:bg-surface-bright not-active:hover:text-on-surface active:inset-shadow-sm active:bg-surface-dim data-panel-open:bg-surface-dim data-panel-open:text-on-surface data-panel-open:inset-shadow-sm shrink-0",
	{
		variants: {
			size: {
				full: "w-full h-xl",
				compact: "size-xl",
			},
		},
		defaultVariants: {
			size: "full",
		},
	},
)
