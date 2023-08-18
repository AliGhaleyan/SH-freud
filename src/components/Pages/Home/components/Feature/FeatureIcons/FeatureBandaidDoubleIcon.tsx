import * as React from "react";
import type { SVGProps } from "react";
const SvgFeatureBandaidDoubleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={96}
    height={96}
    fill="none"
    {...props}
  >
    <g clipPath="url(#feature-bandaid-double-icon_svg__a)">
      <rect width={96} height={96} fill="#E5EAD7" rx={48} />
      <rect width={32} height={96} x={32} fill="#4B3425" rx={16} />
      <rect
        width={32}
        height={96}
        x={96}
        y={32}
        fill="#9BB068"
        rx={16}
        transform="rotate(90 96 32)"
      />
      <rect width={9} height={9} x={82.5} y={43.5} fill="#4B3425" rx={4.5} />
      <rect
        width={9}
        height={9}
        fill="#4B3425"
        rx={4.5}
        transform="matrix(-1 0 0 1 14.25 43.5)"
      />
      <rect
        width={9}
        height={9}
        x={52.875}
        y={82.125}
        fill="#9BB068"
        rx={4.5}
        transform="rotate(90 52.875 82.125)"
      />
      <rect
        width={9}
        height={9}
        fill="#9BB068"
        rx={4.5}
        transform="matrix(0 -1 -1 0 52.875 13.875)"
      />
      <rect width={24} height={24} x={36} y={36} fill="#E5EAD7" rx={12} />
    </g>
    <defs>
      <clipPath id="feature-bandaid-double-icon_svg__a">
        <rect width={96} height={96} fill="#fff" rx={48} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFeatureBandaidDoubleIcon;
