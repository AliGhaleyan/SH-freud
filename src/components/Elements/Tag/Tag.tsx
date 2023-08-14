import classNames from "classnames";

type Props = React.PropsWithChildren<{
  className?: string;
  icon?: React.ReactNode;
}>;

const Tag = (props: Props) => {
  return (
    <div
      className={classNames(
        "flex items-center justify-center gap-2 rounded-full px-3 py-2 text-label-md font-extrabold",
        props.className
      )}
    >
      {props.icon && (
        <div className="flex items-center justify-center rounded-full bg-mindful-gray-10 p-2">
          {props.icon}
        </div>
      )}
      {props.children}
    </div>
  );
};

export default Tag;
