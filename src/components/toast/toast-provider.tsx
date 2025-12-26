import { Toast as BaseToast } from "@base-ui/react/toast";
import { cn } from "@/utils/cn";
import type { ToastProviderProps } from "./toast.types";
import { Toast } from "./toast";

export const ToastProvider = ({
  position = "bottom-center",
  className,
  children,
  ref,
  ...props
}: ToastProviderProps) => {
  return (
    <BaseToast.Provider timeout={5000}>
      {children}
      <BaseToast.Portal>
        <BaseToast.Viewport
          className={cn(
            {
              "fixed z-10 top-[1rem] left-[1rem] right-auto bottom-auto mx-0 flex w-1/4":
                position === "top-left",
              "fixed z-10 top-[1rem] left-1/2 right-auto bottom-auto mx-auto flex w-1/4 -translate-x-1/2":
                position === "top-center",
              "fixed z-10 top-[1rem] right-[1rem] left-auto bottom-auto mx-0 flex w-1/4":
                position === "top-right",
              "fixed z-10 bottom-[6rem] left-[1rem] right-auto top-auto mx-0 flex w-1/4":
                position === "bottom-left",
              "fixed z-10 bottom-[6rem] left-1/2 right-auto top-auto mx-auto flex w-1/4 -translate-x-1/2":
                position === "bottom-center",
              "fixed z-10 bottom-[6rem] right-[1rem] left-auto top-auto mx-0 flex w-1/4":
                position === "bottom-right",
            },
            className
          )}
          ref={ref}
          {...props}>
          <Toast position={position} />
        </BaseToast.Viewport>
      </BaseToast.Portal>
    </BaseToast.Provider>
  );
};
