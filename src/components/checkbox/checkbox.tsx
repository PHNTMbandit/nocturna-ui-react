import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import type { CheckboxRootProps } from "./checkbox.types";
import { CheckboxIndicator } from "./checkbox-indicator";
import { cn } from "@/utils/cn";
import { CheckIcon } from "@phosphor-icons/react";

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
        id={id}
        disabled={disabled}
        className={cn(
          "flex size-md items-center text-on-accent justify-center rounded-sm bg-surface-dim inset-shadow-1-shadow data-checked:bg-accent data-checked:raised-1 hover:cursor-pointer transition-colors hover:disabled:cursor-not-allowed",
          className
        )}
        ref={ref}
        {...props}>
        <CheckboxIndicator>
          <CheckIcon weight="bold" />
        </CheckboxIndicator>
      </BaseCheckbox.Root>
      {label && (
        <label
          htmlFor={id}
          className={cn(
            "body-base cursor-pointer",
            disabled && "text-text-neutral-primary-disabled cursor-not-allowed"
          )}>
          {label}
        </label>
      )}
    </div>
  );
};
