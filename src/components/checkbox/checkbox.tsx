import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox"
import { CheckIcon } from "@phosphor-icons/react"
import { cn } from "@/utils/cn"
import type { CheckboxRootProps } from "./checkbox.types"
import { CheckboxIndicator } from "./checkbox-indicator"

export const Checkbox = ({
	className,
	ref,
	label,
	id,
	disabled,
	...props
}: CheckboxRootProps) => {
	return (
		<div className="flex items-center gap-2">
			<BaseCheckbox.Root
				className={cn(
					"group inset-shadow-xs flex size-md items-center justify-center rounded-sm bg-surface-dim text-on-accent outline-2 outline-accent/0 outline-offset-1 transition-colors hover:cursor-pointer hover:outline-accent hover:disabled:cursor-not-allowed data-checked:inset-shadow-raised-xs data-checked:bg-accent",
					className,
				)}
				disabled={disabled}
				id={id}
				ref={ref}
				{...props}
			>
				<CheckboxIndicator>
					<CheckIcon weight="bold" />
				</CheckboxIndicator>
			</BaseCheckbox.Root>
			{label && (
				<label
					className={cn(
						"body-base cursor-pointer",
						disabled && "cursor-not-allowed text-text-neutral-primary-disabled",
					)}
					htmlFor={id}
				>
					{label}
				</label>
			)}
		</div>
	)
}
