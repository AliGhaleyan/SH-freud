import * as React from "react";
import type { SVGProps } from "react";
const SvgFeatureLockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={96}
    height={96}
    fill="none"
    {...props}
  >
    <rect width={96} height={96} fill="#E5EAD7" rx={48} />
    <path
      fill="#4B3425"
      fillRule="evenodd"
      d="M24 24C24 10.745 34.745 0 48 0s24 10.745 24 24v40H24V24ZM48 8c-8.837 0-16 7.163-16 16v32h32V24c0-8.837-7.163-16-16-16Z"
      clipRule="evenodd"
    />
    <path fill="#9BB068" d="M12 48h72v48H12z" />
    <rect width={16} height={16} x={40} y={64} fill="#4B3425" rx={8} />
  </svg>
);
export default SvgFeatureLockIcon;
