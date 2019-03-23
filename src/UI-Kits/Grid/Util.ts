import { GridColumnProps, ColumnGroupSize } from './Column';

export const getSizes = (props: GridColumnProps) => {
  const { xs = null, sm = null, md = null, lg = null, xl = null, xxl = null, size = null } = props;
  return { xs, sm, md, lg, xl, xxl, size };
};

export const getSizesAsArray = (childrenCount: number, sizes: ColumnGroupSize[]) =>
  sizes.reduce(
    (acc, cur, idx) => {
      for (const [key, value] of Object.entries(cur)) {
        acc[key][idx] = value || null;
      }
      return acc;
    },
    {
      xs: Array(childrenCount),
      sm: Array(childrenCount),
      md: Array(childrenCount),
      lg: Array(childrenCount),
      xl: Array(childrenCount),
      xxl: Array(childrenCount),
      size: Array(childrenCount),
    } as { [key: string]: Array<number | null> },
  );
