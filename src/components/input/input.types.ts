import type { Icon } from "@phosphor-icons/react";
import { Input } from "@base-ui/react/input";
import type { ComponentProps } from "react";

export type InputProps = ComponentProps<typeof Input> & {
  leadingIcon?: Icon;
  showSeparator?: boolean;
};
