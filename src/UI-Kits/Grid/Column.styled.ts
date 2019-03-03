import styled from 'src/Theme';
import { GridColumnProps } from './Column';

const getPotentialSize = (sizes: (number | null)[]) => {
  const totalSize = sizes.reduce<number>((res, s) => res + (s || 0), 0);
  const total = sizes.filter(v => v == null);
  const x = (12 - totalSize) / total.length;
  return x;
};

const getSizeValue = ({ size: potentialSize, allSizes: sizes }: GridColumnProps) => {
  const size = potentialSize == null ? getPotentialSize(sizes) : potentialSize;
  const percentage = (100 / 12) * size;
  return percentage <= 0 ? 'auto' : `${percentage}%`;
};

export const StyledGridColumnContainer = styled.div<GridColumnProps>`
  display: block;
  box-sizing: border-box;
  flex: 0 0 auto;
  flex-basis: ${getSizeValue};
  max-width: ${getSizeValue};

  &:not(:first-of-type) {
    margin-left: auto;
  }
`;
