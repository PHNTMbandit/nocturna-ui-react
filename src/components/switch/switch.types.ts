import { Switch as BaseSwitch } from "@base-ui/react/switch";
import type { ComponentProps } from "react";

export type SwitchProps = ComponentProps<typeof BaseSwitch.Root> & {
  label?: string;
};
