import * as React from "react";
import type { SVGProps } from "react";
const SvgTelephoneIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 6a14 14 0 0 0 14 14"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6a3 3 0 0 1 6 0 3 3 0 0 1-6 0Zm11 11a3 3 0 1 1 6 0 3 3 0 1 1-6 0Z"
    />
  </svg>
);
export default SvgTelephoneIcon;
