import { Avatar as BaseAvatar } from "@base-ui/react/avatar"
import { cn } from "@/utils/cn"
import type { AvatarProps } from "./avatar.types"

export const Avatar = ({ className, children, ref, ...props }: AvatarProps) => {
	return (
		<BaseAvatar.Root
			className={cn(
				"inset-shadow-raised-sm inline-flex size-xl select-none items-center justify-center overflow-hidden rounded-full bg-surface-container align-middle font-medium shadow-sm",
				className,
			)}
			data-slot="avatar"
			ref={ref}
			{...props}
		>
			{children}
		</BaseAvatar.Root>
	)
}
