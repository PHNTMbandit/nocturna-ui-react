import * as React from "react";
import { Tabs as SwitchTabs } from "@base-ui/react/tabs";

export type TabsProps = React.ComponentProps<typeof SwitchTabs.Root>;
export type TabsPanelProps = React.ComponentProps<typeof SwitchTabs.Panel>;
export type TabsTabProps = React.ComponentProps<typeof SwitchTabs.Tab>;
export type TabsIndicatorProps = React.ComponentProps<
  typeof SwitchTabs.Indicator
>;
export type TabsListProps = React.ComponentProps<typeof SwitchTabs.List>;

export const TabsOrientationContext = React.createContext<
  "horizontal" | "vertical"
>("vertical");
