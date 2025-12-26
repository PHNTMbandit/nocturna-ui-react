import { cn } from "@/utils/cn";
import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import type { AvatarFallbackProps } from "./avatar.types";

export const AvatarFallback = ({
  className,
  ref,
  ...props
}: AvatarFallbackProps) => {
  return (
    <BaseAvatar.Fallback
      data-slot="avatar-fallback"
      className={cn("flex size-full items-center justify-center", className)}
      ref={ref}
      {...props}
    />
  );
};
