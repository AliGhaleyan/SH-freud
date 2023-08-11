import * as React from "react";
import type { SVGProps } from "react";
const SvgEmailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={18}
      height={14}
      x={3}
      y={5}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      rx={7}
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 6A6 6 0 0 1 6 6"
    />
  </svg>
);
export default SvgEmailIcon;
