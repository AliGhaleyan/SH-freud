import * as React from "react";
import type { SVGProps } from "react";
const SvgFeatureControlIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={96}
    height={96}
    fill="none"
    {...props}
  >
    <g clipPath="url(#feature-control-icon_svg__a)">
      <rect width={96} height={96} fill="#E5EAD7" rx={48} />
      <path
        fill="#9BB068"
        fillRule="evenodd"
        d="M96 68H0v8h96v-8Z"
        clipRule="evenodd"
      />
      <path
        fill="#4B3425"
        fillRule="evenodd"
        d="M96 44H0v8h96v-8Z"
        clipRule="evenodd"
      />
      <path
        fill="#9BB068"
        fillRule="evenodd"
        d="M96 20H0v8h96v-8Z"
        clipRule="evenodd"
      />
      <rect
        width={16}
        height={16}
        fill="#4B3425"
        rx={8}
        transform="matrix(0 1 1 0 64 16)"
      />
      <rect
        width={16}
        height={16}
        fill="#9BB068"
        rx={8}
        transform="matrix(0 1 1 0 40 40)"
      />
      <rect
        width={16}
        height={16}
        fill="#4B3425"
        rx={8}
        transform="matrix(0 1 1 0 16 64)"
      />
    </g>
    <defs>
      <clipPath id="feature-control-icon_svg__a">
        <rect width={96} height={96} fill="#fff" rx={48} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFeatureControlIcon;
