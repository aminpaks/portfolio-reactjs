export interface ColorSet {
  text: string;
  textInverted: string;

  primary: string;
  secondary: string;
  tertiary: string;

  gray: string;
  grayDark: string;

  info: string;
  warning: string;
  danger: string;
  success: string;
}

export interface FontSet {
  primary: string;
  secondary: string;
}

export interface ViewBreakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export interface Theme {
  colorSet: ColorSet;
  breakpoints: ViewBreakpoints;
}

export interface ThemeProps {
  theme: Theme;
}
