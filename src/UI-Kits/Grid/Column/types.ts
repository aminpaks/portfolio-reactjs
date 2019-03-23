import { CSSProperties } from 'react';

export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | null;
export interface ColumnGroupSize {
  xs?: ColumnSize;
  sm?: ColumnSize;
  md?: ColumnSize;
  lg?: ColumnSize;
  xl?: ColumnSize;
  xxl?: ColumnSize;
  size?: ColumnSize;
}
export interface GridColumnProps extends ColumnGroupSize {
  style?: CSSProperties;
}
export interface InternalGridColumnProps {
  size: ColumnGroupSize;
  allColumnSizes: { [breakpoint: string]: Array<number | null> };
  style?: CSSProperties;
}
