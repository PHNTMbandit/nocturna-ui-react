import * as React from "react";
import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";

export type CheckboxRootProps = React.ComponentProps<
  typeof BaseCheckbox.Root
> & {
  label?: React.ReactNode;
};

export type CheckboxIndicatorProps = React.ComponentProps<
  typeof BaseCheckbox.Indicator
>;
