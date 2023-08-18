import * as React from "react";
import type { SVGProps } from "react";
const SvgFeatureMicrosopeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={96}
    height={96}
    fill="none"
    {...props}
  >
    <g clipPath="url(#feature-microsope-icon_svg__a)">
      <rect width={96} height={96} fill="#E5EAD7" rx={48} />
      <path fill="#9BB068" d="m31.072 9.608 13.856 8-12 20.785-13.856-8z" />
      <path
        fill="#9BB068"
        fillRule="evenodd"
        d="M64.898 20.826A32 32 0 0 0 48 16V0A48 48 0 1 1 1.636 60.423l15.454-4.14a32 32 0 1 0 47.808-35.457Z"
        clipRule="evenodd"
      />
      <path
        fill="#4B3425"
        d="m42.144-24.785 27.713 16-24 41.57-27.713-16zM-4 52h40v16H-4z"
      />
    </g>
    <defs>
      <clipPath id="feature-microsope-icon_svg__a">
        <rect width={96} height={96} fill="#fff" rx={48} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFeatureMicrosopeIcon;
