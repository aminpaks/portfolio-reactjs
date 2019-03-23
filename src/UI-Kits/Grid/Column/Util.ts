import { ViewBreakpoints, ViewBreakpoint } from 'src/Theme';

import { InternalGridColumnProps, ColumnGroupSize } from './types';

export const getPotentialSize = (allColumnSizes: (number | null)[]) => {
  const totalSize = allColumnSizes.reduce<number>((res, s) => res + (s || 0), 0);
  const total = allColumnSizes.filter(v => v == null);
  const x = (12 - totalSize) / total.length;
  return x;
};

const breakpointFromSmallToLarge: Array<ViewBreakpoint> = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

export const getMinimumSize = (breakpoint: ViewBreakpoint, groupSizes: ColumnGroupSize) => {
  const potentialSize = groupSizes[breakpoint];

  // Returns null if sizes or default size is not available
  if (potentialSize != null) {
    return potentialSize;
  }

  const sizeCollection = Object.entries(groupSizes) as ([ViewBreakpoint, number | null | undefined][]);
  const breakpointIndex = breakpointFromSmallToLarge.indexOf(breakpoint);
  const sortedBreakpointSizes = sizeCollection
    .filter(size => breakpointFromSmallToLarge.includes(size[0]))
    .sort((a, b) => breakpointFromSmallToLarge.indexOf(b[0]) - breakpointFromSmallToLarge.indexOf(a[0]));

  const adjustedSize = sortedBreakpointSizes.find(
    size => size[1] != null && breakpointFromSmallToLarge.indexOf(size[0]) <= breakpointIndex,
  ) || ['xs'];

  return groupSizes[adjustedSize[0]] || groupSizes.size || null;
};

export const getSizeValue = (breakpoint: keyof ViewBreakpoints) => ({
  size: potentialSize,
  allColumnSizes: sizes,
}: InternalGridColumnProps) => {
  const potentialSizeForBreakpoint =
    breakpoint != null && potentialSize != null ? getMinimumSize(breakpoint, potentialSize) : null;
  const size = potentialSizeForBreakpoint == null ? getPotentialSize(sizes[breakpoint]) : potentialSizeForBreakpoint;
  const percentage = (100 / 12) * size;
  return percentage <= 0 ? 'auto' : `${percentage.toFixed(2).replace(/\.00$/, '')}%`;
};
