import { cn } from "@/utils/cn"
import { Avatar, AvatarFallback, AvatarImage } from "../avatar"
import type { ProfileProps } from "./profile.types"

export const Profile = ({
	className,
	imageUrl,
	fallbackText,
	profileName,
	profileEmail = "",
	compact = false,
	children,
	ref,
	...props
}: ProfileProps) => {
	return (
		<button
			className={cn("flex items-center gap-xs transition-colors", className)}
			ref={ref}
			{...props}
		>
			<Avatar>
				<AvatarImage src={imageUrl} />
				<AvatarFallback>{fallbackText}</AvatarFallback>
				{children}
			</Avatar>
			<div
				className={cn(
					"flex flex-col items-start justify-start",
					compact && "hidden",
				)}
			>
				<span className="style-text-default-0">{profileName}</span>
				<span className="style-text-default--2 text-on-surface-variant">
					{profileEmail}
				</span>
			</div>
		</button>
	)
}
