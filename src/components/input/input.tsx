import { Input as BaseInput } from "@base-ui/react/input"
import { createElement } from "react"
import { cn } from "@/utils/cn"
import { Separator } from "../separator"
import type { InputProps } from "./input.types"

export const Input = ({
	leadingIcon,
	showSeparator = true,
	className,
	ref,
	...props
}: InputProps) => {
	return (
		<div
			aria-disabled={props.disabled}
			className={cn(
				"group style-text-default-0 inset-shadow-sm flex h-xl w-full items-center gap-xs rounded-xl bg-surface-dim px-md py-sm outline-2 outline-transparent transition-all focus-within:caret-primary focus-within:outline-primary hover:not-focus-within:outline-outline data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 data-[disabled=true]:hover:outline-transparent",
				className,
			)}
			data-disabled={props.disabled}
		>
			{leadingIcon && (
				<>
					<div
						className={cn(
							"flex items-center justify-center text-on-surface-variant transition-all group-focus-within:text-primary [&>svg]:size-sm",
						)}
					>
						{createElement(leadingIcon, {
							weight: "bold",
						})}
					</div>
					{showSeparator && (
						<Separator
							className={"group-focus-within:bg-primary"}
							orientation="vertical"
						/>
					)}
				</>
			)}
			<BaseInput
				className={cn(
					"w-full outline-none",
					"placeholder:opacity-60",
					"disabled:cursor-not-allowed disabled:text-text-neutral-primary-disabled",
					"overflow-ellipsis",
				)}
				ref={ref}
				{...props}
			/>
		</div>
	)
}
