import * as React from "react";
import type { SVGProps } from "react";
const SvgQuestionRoundIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={18}
      height={18}
      x={3}
      y={3}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      rx={9}
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 10a3 3 0 1 1 4.667 2.494c-.812.543-1.667 1.297-1.667 2.273V15"
    />
    <rect width={2} height={2} x={11} y={16} fill="currentColor" rx={1} />
  </svg>
);
export default SvgQuestionRoundIcon;
