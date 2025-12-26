import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import type { ComponentProps } from "react";

export type AvatarProps = ComponentProps<typeof BaseAvatar.Root>;
export type AvatarImageProps = ComponentProps<typeof BaseAvatar.Image>;
export type AvatarFallbackProps = ComponentProps<typeof BaseAvatar.Fallback>;
