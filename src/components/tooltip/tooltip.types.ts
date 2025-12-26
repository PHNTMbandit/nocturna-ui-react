import * as React from "react";
import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";

export type TooltipProps = React.ComponentProps<typeof BaseTooltip.Root>;
export type TooltipTriggerProps = React.ComponentProps<
  typeof BaseTooltip.Trigger
>;
export type TooltipContentProps = React.ComponentProps<
  typeof BaseTooltip.Popup
>;
