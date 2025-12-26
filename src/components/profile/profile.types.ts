export type ProfileProps = React.ComponentProps<"button"> & {
  imageUrl: string;
  fallbackText: string;
  profileName?: string;
  profileEmail?: string;
  compact?: boolean;
};
