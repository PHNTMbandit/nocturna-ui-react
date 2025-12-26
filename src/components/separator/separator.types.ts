import { Separator as BaseSeparator } from "@base-ui/react/separator";
import { cva, type VariantProps } from "class-variance-authority";

export const separatorVariants = cva(
  "shrink-0 rounded-full bg-outline transition-all",
  {
    variants: {
      orientation: {
        horizontal: "w-full",
        vertical: "h-full",
      },
      thickness: {
        thick: "",
        medium: "",
        thin: "",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      thickness: "medium",
    },
    compoundVariants: [
      {
        orientation: "horizontal",
        thickness: "thick",
        className: "h-[4px]",
      },
      {
        orientation: "horizontal",
        thickness: "medium",
        className: "h-[2px]",
      },
      {
        orientation: "horizontal",
        thickness: "thin",
        className: "h-[1px]",
      },
      {
        orientation: "vertical",
        thickness: "thick",
        className: "w-[4px]",
      },
      {
        orientation: "vertical",
        thickness: "medium",
        className: "w-[2px]",
      },
      {
        orientation: "vertical",
        thickness: "thin",
        className: "w-[1px]",
      },
    ],
  }
);

export type SeparatorProps = Omit<
  React.ComponentProps<typeof BaseSeparator>,
  "style"
> &
  VariantProps<typeof separatorVariants>;
