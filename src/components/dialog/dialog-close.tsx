import { cn } from "@/utils/cn";
import { Button } from "../button";
import type { DialogCloseProps } from "./dialog.types";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";

export const DialogClose = ({
  className,
  children,
  ref,
  ...props
}: DialogCloseProps) => {
  return (
    <BaseDialog.Close
      className={cn("", className)}
      ref={ref}
      {...props}
      render={
        <Button
          style="ghost"
          tone={"neutral"}>
          Close
        </Button>
      }>
      {children}
    </BaseDialog.Close>
  );
};
