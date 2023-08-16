import classNames from "classnames";

const Container = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div className="px-4 py-2">
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
