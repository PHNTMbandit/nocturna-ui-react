import { Switch as BaseSwitch } from "@base-ui/react/switch"
import { cn } from "@/utils/cn"
import { Label } from "../label"
import type { SwitchProps } from "./switch.types"

export const Switch = ({ label, className, ref, ...props }: SwitchProps) => {
	return (
		<div className="flex items-center gap-xs">
			<BaseSwitch.Root
				className={cn(
					"group relative inset-shadow-xs flex h-[26px] w-[50px] items-center rounded-full bg-size-[6.5rem_100%] bg-surface-dim p-0.5 outline-2 outline-transparent transition-colors ease-[cubic-bezier(0.26,0.75,0.38,0.45)] before:absolute before:rounded-full hover:cursor-pointer not-disabled:hover:outline-accent disabled:pointer-events-none disabled:opacity-50 data-checked:bg-accent data-checked:active:bg-gray-500",
					className,
				)}
				ref={ref}
				{...props}
			>
				<BaseSwitch.Thumb
					className={
						"inset-shadow-raised-xs size-[12px] translate-x-[8px] rounded-full bg-accent shadow-xs transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] data-checked:size-[16px] data-checked:translate-x-[28px] data-checked:scale-[1.1] data-checked:bg-on-accent data-unchecked:bg-accent"
					}
				/>
			</BaseSwitch.Root>
			{label && <Label htmlFor={props.id}>{label}</Label>}
		</div>
	)
}
