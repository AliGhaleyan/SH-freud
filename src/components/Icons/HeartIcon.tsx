import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m19.885 13.5-6.853 6.853a.915.915 0 0 1-1.294 0L4.885 13.5a4.95 4.95 0 0 1 7-7l.5.5.5-.5a4.95 4.95 0 1 1 7 7Z"
    />
  </svg>
);
export default SvgHeartIcon;
