import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import { cn } from "@/utils/cn";
import type { ScrollAreaProps } from "./scroll-area.types";

export const ScrollArea = ({
  orientation = "vertical",
  className,
  children,
  ref,
  ...props
}: ScrollAreaProps) => {
  return (
    <BaseScrollArea.Root
      className={cn(
        "h-[200px] rounded-lg bg-surface-container",
        orientation === "horizontal" && "h-full",
        className
      )}
      ref={ref}
      {...props}>
      <BaseScrollArea.Viewport
        className={
          "h-full overscroll-contain flex flex-col gap-xs py-2xs pr-sm pl-sm prose-step-0"
        }>
        {children}
      </BaseScrollArea.Viewport>
      <BaseScrollArea.Scrollbar
        orientation={orientation}
        className={cn(
          "inset-shadow-1-shadow flex justify-center rounded p-[2px] bg-surface-dim opacity-0 transition-opacity delay-300 data-hovering:opacity-100 data-hovering:delay-0 data-hovering:duration-75 data-scrolling:opacity-100 data-scrolling:delay-0 data-scrolling:duration-75 hover:cursor-pointer",
          orientation === "vertical" && "w-2xs mr-2xs my-2xs",
          orientation === "horizontal" && "h-2xs flex-col mb-2xs mx-xs",
          className
        )}>
        <BaseScrollArea.Thumb
          className={"w-full h-full rounded-full bg-accent rounded-1"}
        />
      </BaseScrollArea.Scrollbar>
      <BaseScrollArea.Corner />
    </BaseScrollArea.Root>
  );
};
