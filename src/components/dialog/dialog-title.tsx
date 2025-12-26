import { cn } from "@/utils/cn";
import type { DialogTitleProps } from "./dialog.types";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";

export const DialogTitle = ({
  className,
  children,
  ref,
  ...props
}: DialogTitleProps) => {
  return (
    <BaseDialog.Title
      className={cn("text-strong-2", className)}
      ref={ref}
      {...props}>
      {children}
    </BaseDialog.Title>
  );
};
