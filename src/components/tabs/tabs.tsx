import { TabsOrientationContext, type TabsProps } from "./tabs.types";
import { Tabs as SwitchTabs } from "@base-ui/react/tabs";
import { cn } from "@/utils/cn";
import React from "react";

export const Tabs = ({ className, ref, ...props }: TabsProps) => {
  const [orientation, setOrientation] = React.useState<
    "horizontal" | "vertical"
  >(props.orientation ?? "vertical");

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOrientation("horizontal");
      } else {
        setOrientation(props.orientation ?? "vertical");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [props.orientation]);

  props.orientation = orientation;
  if (props.orientation === "horizontal") {
    return (
      <TabsOrientationContext.Provider value={props.orientation}>
        <SwitchTabs.Root
          className={cn("flex flex-wrap gap-4 overflow-auto", className)}
          ref={ref}
          {...props}
        />
      </TabsOrientationContext.Provider>
    );
  }

  return (
    <SwitchTabs.Root
      className={cn("flex flex-col gap-2 overflow-clip", className)}
      ref={ref}
      {...props}
    />
  );
};
