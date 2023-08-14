import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={4}
      height={4}
      x={10}
      y={7}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      rx={2}
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 9.277c0 1.633.637 3.202 1.775 4.373L12 18l4.225-4.35A6.277 6.277 0 0 0 18 9.277V9A6 6 0 1 0 6 9v.277ZM5 21h14"
    />
  </svg>
);
export default SvgLocationIcon;
