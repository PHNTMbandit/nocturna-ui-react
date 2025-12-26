import type { TabsTabProps } from "./tabs.types";
import { Tabs as SwitchTabs } from "@base-ui/react/tabs";
import { cn } from "@/utils/cn";

export const TabsTab = ({ className, ...props }: TabsTabProps) => {
  return (
    <SwitchTabs.Tab
      className={cn(
        "inline-flex rounded-2xl md:rounded-full h-11 md:h-12 px-6 body-base-semibold w-full text-text-brand-primary-default text-center items-center justify-center border-0 break-keep whitespace-nowrap outline-none select-none focus-visible:relative focus-visible:before:absolute focus-visible:before:outline data-selected:text-text-inverse-primary-default transition-colors duration-300 hover:cursor-pointer aria-[selected=false]:hover:bg-surface-neutral-primary-hover",
        className
      )}
      {...props}
    />
  );
};
