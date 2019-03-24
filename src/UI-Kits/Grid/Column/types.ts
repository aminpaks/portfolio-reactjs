import { CSSProperties } from 'react';

export type ColumnSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | null;
export interface ColumnBreakpointSize {
  xs?: ColumnSize;
  sm?: ColumnSize;
  md?: ColumnSize;
  lg?: ColumnSize;
  xl?: ColumnSize;
  xxl?: ColumnSize;
  size?: ColumnSize;
}
export type BreakpointGroupSize = { [breakpoint: string]: Array<number | null> };
export interface GridColumnProps extends ColumnBreakpointSize {
  style?: CSSProperties;
}
export interface InternalGridColumnProps {
  size: ColumnBreakpointSize;
  allColumnSizes: BreakpointGroupSize;
  style?: CSSProperties;
}
