import { Tabs as SwitchTabs } from "@base-ui/react/tabs";
import { createContext, type ComponentProps } from "react";

export type TabsProps = ComponentProps<typeof SwitchTabs.Root>;
export type TabsPanelProps = ComponentProps<typeof SwitchTabs.Panel>;
export type TabsTabProps = ComponentProps<typeof SwitchTabs.Tab>;
export type TabsIndicatorProps = ComponentProps<typeof SwitchTabs.Indicator>;
export type TabsListProps = ComponentProps<typeof SwitchTabs.List>;

export const TabsOrientationContext = createContext<"horizontal" | "vertical">(
  "vertical"
);
