import classNames from "classnames";

type Props = React.PropsWithChildren<{
  className?: string;
  icon?: React.ReactNode;
  size?: "sm" | "md";
}>;

const SIZE_CLASS: Record<Props["size"], string> = {
  sm: "tag-sm",
  md: "tag-md",
};

const Tag = (props: Props) => {
  const size = props.size || "md";

  return (
    <div className={classNames("tag", SIZE_CLASS[size], props.className)}>
      {props.icon && <div className="tag-icon">{props.icon}</div>}
      {props.children}
    </div>
  );
};

export default Tag;
