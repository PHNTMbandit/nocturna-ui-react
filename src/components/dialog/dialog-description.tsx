import { cn } from "@/utils/cn";
import type { DialogDescriptionProps } from "./dialog.types";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";

export const DialogDescription = ({
  className,
  children,
  ref,
  ...props
}: DialogDescriptionProps) => {
  return (
    <BaseDialog.Description
      className={cn("text-prose-0 mb-0", className)}
      ref={ref}
      {...props}>
      {children}
    </BaseDialog.Description>
  );
};
