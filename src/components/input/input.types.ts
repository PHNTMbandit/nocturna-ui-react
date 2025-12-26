import * as React from "react";
import type { Icon } from "@phosphor-icons/react";
import { Input } from "@base-ui/react/input";

export type InputProps = React.ComponentProps<typeof Input> & {
  leadingIcon?: Icon;
  showSeparator?: boolean;
};
