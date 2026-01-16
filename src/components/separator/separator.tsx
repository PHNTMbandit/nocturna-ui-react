import { cn } from "@/utils/cn"
import { type SeparatorProps, separatorVariants } from "./separator.types"

export const Separator = ({
	tone,
	orientation,
	thickness,
	className,
	children,
	ref,
	...props
}: SeparatorProps) => {
	return (
		<div
			className={cn(
				separatorVariants({ tone, orientation, thickness, className }),
			)}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	)
}
