export type TagSize = "sm" | "md";

export type TagProps = React.PropsWithChildren<{
  className?: string;
  icon?: React.ReactNode;
  size?: TagSize;
}>;
