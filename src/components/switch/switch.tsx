import { Switch as BaseSwitch } from "@base-ui/react/switch";
import { cn } from "@/utils/cn";
import type { SwitchProps } from "./switch.types";
import { Label } from "../label";

export const Switch = ({ label, className, ref, ...props }: SwitchProps) => {
  return (
    <div className="flex items-center gap-xs">
      <BaseSwitch.Root
        className={cn(
          "relative group transition-colors flex items-center h-[26px] w-[50px] rounded-full bg-surface-dim bg-size-[6.5rem_100%] inset-shadow-1-shadow p-0.5 ease-[cubic-bezier(0.26,0.75,0.38,0.45)] before:absolute before:rounded-full data-checked:bg-accent data-checked:active:bg-gray-500 outline-2 outline-transparent not-disabled:hover:outline-accent hover:cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
          className
        )}
        ref={ref}
        {...props}>
        <BaseSwitch.Thumb
          className={
            "size-[14px] data-checked:size-[18px] rounded-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] translate-x-[6px] shadow-xs data-checked:translate-x-[26px] data-checked:scale-[1.1] data-unchecked:bg-accent data-checked:bg-on-accent"
          }
        />
      </BaseSwitch.Root>
      {label && <Label htmlFor={props.id}>{label}</Label>}
    </div>
  );
};
