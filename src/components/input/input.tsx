import { cn } from "@/utils/cn";
import { Input as BaseInput } from "@base-ui/react/input";
import React from "react";
import type { InputProps } from "./input.types";
import { Separator } from "../separator";

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
      data-disabled={props.disabled}
      className={cn(
        "flex items-center gap-xs px-md w-full py-sm group h-xl inset-shadow-2-shadow inset-shadow-sm bg-surface-dim rounded-xl data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:hover:outline-transparent outline-2 outline-transparent hover:not-focus-within:outline-outline focus-within:outline-primary focus-within:caret-primary transition-all",
        className
      )}>
      {leadingIcon && (
        <>
          <div
            className={cn(
              "flex items-center text-on-surface-variant justify-center [&>svg]:size-s group-focus-within:text-primary transition-all"
            )}>
            {React.createElement(leadingIcon, {
              weight: "bold",
            })}
          </div>
          {showSeparator && (
            <Separator
              orientation="vertical"
              className={"group-focus-within:bg-primary"}
            />
          )}
        </>
      )}
      <BaseInput
        className={cn(
          "outline-none w-full",
          "placeholder:opacity-60",
          "disabled:text-text-neutral-primary-disabled disabled:cursor-not-allowed",
          "overflow-ellipsis"
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
};
