import classNames from "classnames";

type Props = React.HTMLAttributes<HTMLDivElement>;

const Label = ({ className, ...props }: Props) => {
  return (
    <div
      className={classNames(
        "flex items-center justify-between gap-1.5 rounded-full px-3 py-2.5 text-label-sm font-extrabold uppercase",
        className
      )}
      {...(props as object)}
    />
  );
};

export default Label;
