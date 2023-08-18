import * as React from "react";
import type { SVGProps } from "react";
const SvgFeatureMobilePhoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={96}
    height={96}
    fill="none"
    {...props}
  >
    <g clipPath="url(#feature-mobile-phone-icon_svg__a)">
      <rect width={96} height={96} fill="#E5EAD7" rx={48} />
      <path fill="#9BB068" d="M16 96h64V-4H16z" />
      <path fill="#4B3425" d="M16 76h64V12H16z" />
      <rect
        width={16}
        height={16}
        fill="#E5EAD7"
        rx={8}
        transform="matrix(1 0 0 -1 40 96)"
      />
    </g>
    <defs>
      <clipPath id="feature-mobile-phone-icon_svg__a">
        <rect width={96} height={96} fill="#fff" rx={48} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFeatureMobilePhoneIcon;
