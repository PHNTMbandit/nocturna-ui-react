import { Toast as BaseToast } from "@base-ui/react/toast";
import type { ComponentProps } from "react";

export type ToastProviderProps = ComponentProps<typeof BaseToast.Viewport> & {
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
};

export type ToastProps = ComponentProps<"div"> & {
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
};
