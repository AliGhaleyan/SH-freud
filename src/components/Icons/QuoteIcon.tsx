import * as React from "react";
import type { SVGProps } from "react";
const SvgQuoteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M34 26h-1a7 7 0 1 1 7-7v14a3 3 0 1 1-6 0v-7Zm-20 0h-1a7 7 0 1 1 7-7v14a3 3 0 1 1-6 0v-7Z"
    />
  </svg>
);
export default SvgQuoteIcon;
