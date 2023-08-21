import classNames from "classnames";

type Props = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & {
    parentClassName?: string;
  }
>;

const Container = ({
  children,
  className,
  parentClassName,
  ...props
}: Props) => {
  return (
    <div className={classNames("px-4 py-2", parentClassName)}>
      <div
        className={classNames("container", className)}
        {...(props as object)}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
