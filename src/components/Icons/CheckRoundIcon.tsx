import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckRoundIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <rect
      width={18}
      height={18}
      x={3}
      y={3.5}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      rx={9}
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 13.062c0 .482.136.953.391 1.354a2.35 2.35 0 0 0 1.043.898 2.22 2.22 0 0 0 1.342.14c.45-.095.799-.259 1.189-.668L17 9.5"
    />
  </svg>
);
export default SvgCheckRoundIcon;
