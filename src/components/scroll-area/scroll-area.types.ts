import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import type { ComponentProps } from "react";

export type ScrollAreaProps = ComponentProps<typeof BaseScrollArea.Root> & {
  orientation?: "horizontal" | "vertical";
};
