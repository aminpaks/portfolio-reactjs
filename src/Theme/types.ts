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

export interface ViewBreakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export type ViewBreakpointSetting = 'min-width' | 'max-width';

export type ViewBreakpoint = keyof ViewBreakpoints;

export type PropertySide = 'top' | 'right' | 'bottom' | 'left';

export type SpacingToken = ViewBreakpoint | 'auto' | '0';

export type CSSShorthandProperty<T extends string> = [T, T?, T?, T?];

export interface TokenValue {
  [key: string]: string;
}

export interface SpacingTokenValue extends TokenValue {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface Tokens {
  spacing: SpacingTokenValue;
}

export type TokenType = keyof Tokens;

export interface FontSet {
  primary: string;
  secondary: string;
}

export interface Theme {
  colorSet: ColorSet;
  breakpoints: ViewBreakpoints;
  tokens: Tokens;
}

export interface ThemeProps {
  theme: Theme;
}

export type WithThemeProps<T = {}> = T & ThemeProps;
