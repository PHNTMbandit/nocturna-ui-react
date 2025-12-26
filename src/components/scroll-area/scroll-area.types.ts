import * as React from "react";
import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";

export type ScrollAreaProps = React.ComponentProps<
  typeof BaseScrollArea.Root
> & {
  orientation?: "horizontal" | "vertical";
};
