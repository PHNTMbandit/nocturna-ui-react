import * as React from "react";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";

export type DialogProps = React.ComponentProps<typeof BaseDialog.Root>;

export type DialogTriggerProps = React.ComponentProps<
  typeof BaseDialog.Trigger
>;

export type DialogPopupProps = React.ComponentProps<typeof BaseDialog.Popup> & {
  showCloseButton?: boolean;
};

export type DialogTitleProps = React.ComponentProps<typeof BaseDialog.Title>;

export type DialogDescriptionProps = React.ComponentProps<
  typeof BaseDialog.Description
>;

export type DialogCloseProps = React.ComponentProps<typeof BaseDialog.Close>;
