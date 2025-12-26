import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import { cn } from "@/utils/cn";
import type { AvatarProps } from "./avatar.types";

export const Avatar = ({ className, children, ref, ...props }: AvatarProps) => {
  return (
    <BaseAvatar.Root
      data-slot="avatar"
      className={cn(
        "inline-flex size-xl items-center justify-center overflow-hidden rounded-full bg-surface-container align-middle font-medium select-none raised-2",
        className
      )}
      ref={ref}
      {...props}>
      {children}
    </BaseAvatar.Root>
  );
};
