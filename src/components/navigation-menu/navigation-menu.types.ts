import type { NavigationMenu as BaseNavigationMenu } from "@base-ui/react/navigation-menu"

export type NavigationMenuProps = React.ComponentProps<
	typeof BaseNavigationMenu.Root
>

export type NavigationMenuListProps = React.ComponentProps<
	typeof BaseNavigationMenu.List
>

export type NavigationMenuItemProps = React.ComponentProps<
	typeof BaseNavigationMenu.Item
>

export type NavigationMenuTriggerProps = React.ComponentProps<
	typeof BaseNavigationMenu.Trigger
>

export type NavigationMenuContentProps = React.ComponentProps<
	typeof BaseNavigationMenu.Content
>

export type NavigationMenuIconProps = React.ComponentProps<
	typeof BaseNavigationMenu.Icon
>

export type NavigationMenuLinkProps = React.ComponentProps<
	typeof BaseNavigationMenu.Link
>

export type NavigationMenuViewportProps = React.ComponentProps<
	typeof BaseNavigationMenu.Positioner
>
