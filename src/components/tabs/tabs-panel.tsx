import { TabsOrientationContext, type TabsPanelProps } from "./tabs.types";
import { Tabs as SwitchTabs } from "@base-ui/react/tabs";
import { cn } from "@/utils/cn";
import React from "react";

export const TabsPanel = ({ className, ...props }: TabsPanelProps) => {
  const orientation = React.useContext(TabsOrientationContext);

  return (
    <SwitchTabs.Panel
      className={cn(
        "relative rounded-xl bg-surface-neutral-primary-default",
        orientation === "horizontal" ? "flex-1 min-h-0 h-full" : "grow",
        "flex items-center justify-center p-4 overflow-auto",
        className
      )}
      {...props}
    />
  );
};
