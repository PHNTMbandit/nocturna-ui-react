import { Avatar as BaseAvatar } from "@base-ui/react/avatar";

export type AvatarProps = React.ComponentProps<typeof BaseAvatar.Root>;
export type AvatarImageProps = React.ComponentProps<typeof BaseAvatar.Image>;
export type AvatarFallbackProps = React.ComponentProps<
  typeof BaseAvatar.Fallback
>;
