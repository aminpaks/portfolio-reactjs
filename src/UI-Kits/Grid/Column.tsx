import React, { FC } from 'react';
import { StyledGridColumnContainer } from './Column.styled';

export interface GridColumnProps {
  size: number | null;
  allSizes: (number | null)[];
  style: any;
}
export type PGridColumnProps = Partial<GridColumnProps>;

export const Column: FC<PGridColumnProps> = ({ children, size = null, allSizes = [], style }) => (
  <StyledGridColumnContainer size={size} allSizes={allSizes} style={style}>
    {children}
  </StyledGridColumnContainer>
);
