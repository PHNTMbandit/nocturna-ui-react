import React from "react";
import { TabsOrientationContext, type TabsIndicatorProps } from "./tabs.types";
import { Tabs as SwitchTabs } from "@base-ui/react/tabs";
import { cn } from "@/utils/cn";

export const TabsIndicator = ({ className, ...props }: TabsIndicatorProps) => {
  const orientation = React.useContext(TabsOrientationContext);
  if (orientation === "horizontal") {
    return (
      <SwitchTabs.Indicator
        className={cn(
          "absolute left-1/2 h-11 md:h-12 top-0 z-[-1] w-(--active-tab-width) translate-y-(--active-tab-top) -translate-x-1/2 rounded-2xl md:rounded-full bg-surface-brand-primary-default transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]",
          className
        )}
        {...props}
      />
    );
  }

  return (
    <SwitchTabs.Indicator
      className={cn(
        "absolute top-1/2 h-11 md:h-12 left-0 z-[-1] w-(--active-tab-width) translate-x-(--active-tab-left) -translate-y-1/2 rounded-full bg-surface-brand-primary-default transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]",
        className
      )}
      {...props}
    />
  );
};
