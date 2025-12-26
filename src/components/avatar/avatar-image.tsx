import { cn } from "@/utils/cn";
import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import type { AvatarImageProps } from "./avatar.types";

export const AvatarImage = ({ className, ref, ...props }: AvatarImageProps) => {
  return (
    <BaseAvatar.Image
      data-slot="avatar-image"
      className={cn("size-full object-cover", className)}
      ref={ref}
      {...props}
    />
  );
};
