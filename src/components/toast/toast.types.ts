import * as React from "react";
import { Toast as BaseToast } from "@base-ui/react/toast";

export type ToastProviderProps = React.ComponentProps<
  typeof BaseToast.Viewport
> & {
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
};

export type ToastProps = React.ComponentProps<"div"> & {
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
};
