import classNames from "classnames";

type Props = React.PropsWithChildren<{
  className?: string;
  icon?: React.ReactNode;
}>;

const Tag = (props: Props) => {
  return (
    <div
      className={classNames(
        "flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-[8.37px] font-extrabold uppercase md:rounded-full md:text-label-md",
        props.className
      )}
    >
      {props.icon && (
        <div className="flex h-4 w-4 items-center justify-center uppercase md:h-8 md:w-8 md:rounded-full md:bg-mindful-gray-10 md:p-2">
          {props.icon}
        </div>
      )}
      {props.children}
    </div>
  );
};

export default Tag;
