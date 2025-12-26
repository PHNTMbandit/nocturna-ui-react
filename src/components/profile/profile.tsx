import { cn } from "@/utils/cn";
import type { ProfileProps } from "./profile.types";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";

export const Profile = ({
  className,
  imageUrl,
  fallbackText,
  profileName = "",
  profileEmail = "",
  compact = false,
  children,
  ref,
  ...props
}: ProfileProps) => {
  return (
    <button
      className={cn("flex items-center gap-xs transition-colors", className)}
      ref={ref}
      {...props}>
      <Avatar>
        <AvatarImage src={imageUrl} />
        <AvatarFallback>{fallbackText}</AvatarFallback>
        {children}
      </Avatar>
      <div
        className={cn(
          "flex flex-col justify-start items-start",
          compact && "hidden"
        )}>
        <span className="text-prose-0">{profileName}</span>
        <span className="text-on-surface-variant text-prose--1">
          {profileEmail}
        </span>
      </div>
    </button>
  );
};
