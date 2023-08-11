import { LogoSize } from "./types";

export const LOGO_MARKER_SIZE: Record<LogoSize, number> = {
  md: 36,
  lg: 72,
};

// [width, height]
export const LOGO_TITLE_SIZE: Record<LogoSize, [number, number]> = {
  md: [102, 26],
  lg: [123, 32],
};
