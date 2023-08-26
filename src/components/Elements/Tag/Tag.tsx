import classNames from "classnames";
import { TagProps } from "./types";
import { TAG_SIZE_CLASS } from "./consts";

const Tag = (props: TagProps) => {
  const size = props.size || "md";

  return (
    <div className={classNames("tag", TAG_SIZE_CLASS[size], props.className)}>
      {props.icon && <div className="tag-icon">{props.icon}</div>}
      {props.children}
    </div>
  );
};

export default Tag;
