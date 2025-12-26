import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import type { ComponentProps, ReactNode } from "react";

export type CheckboxRootProps = ComponentProps<typeof BaseCheckbox.Root> & {
  label?: ReactNode;
};

export type CheckboxIndicatorProps = ComponentProps<
  typeof BaseCheckbox.Indicator
>;
