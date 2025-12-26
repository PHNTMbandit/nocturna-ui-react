import { TabsOrientationContext, type TabsListProps } from "./tabs.types";
import { Tabs as SwitchTabs } from "@base-ui/react/tabs";
import { cn } from "@/utils/cn";
import React from "react";

export const TabsList = ({ className, ...props }: TabsListProps) => {
  const orientation = React.useContext(TabsOrientationContext);

  if (orientation === "horizontal") {
    return (
      <SwitchTabs.List
        className={cn(
          "relative z-0 flex flex-col h-fit grow gap-2 p-2 bg-surface-neutral-primary-default rounded-3xl",
          className
        )}
        {...props}
      />
    );
  }

  return (
    <SwitchTabs.List
      className={cn(
        "relative z-0 flex gap-1 p-2 bg-surface-neutral-primary-default rounded-full",
        className
      )}
      {...props}
    />
  );
};
