import { Switch as BaseSwitch } from "@base-ui/react/switch";

export type SwitchProps = React.ComponentProps<typeof BaseSwitch.Root> & {
  label?: string;
};
