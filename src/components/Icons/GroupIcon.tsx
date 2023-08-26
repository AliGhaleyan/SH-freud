import * as React from "react";
import type { SVGProps } from "react";
const SvgGroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2.667}
      d="M28 18.667A6.668 6.668 0 0 0 21.333 12"
    />
    <rect
      width={5.333}
      height={5.333}
      x={18.667}
      y={6.667}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2.667}
      rx={2.667}
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2.667}
      d="M4 18.667A6.667 6.667 0 0 1 10.667 12"
    />
    <rect
      width={5.333}
      height={5.333}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2.667}
      rx={2.667}
      transform="matrix(-1 0 0 1 13.333 6.667)"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2.667}
      d="M9.333 28a6.666 6.666 0 1 1 13.334 0"
    />
    <rect
      width={5.333}
      height={5.333}
      x={13.333}
      y={14.667}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2.667}
      rx={2.667}
    />
  </svg>
);
export default SvgGroupIcon;
