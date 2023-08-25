import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 12H3m4.447 5.796a6 6 0 0 1 0-11.592"
    />
  </svg>
);
export default SvgArrowLeftIcon;
