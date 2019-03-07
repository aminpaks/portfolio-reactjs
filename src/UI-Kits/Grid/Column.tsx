import React, { FC, CSSProperties } from 'react';
import { StyledGridColumnContainer } from './Column.styled';

export interface GridColumnProps {
  size: number | null;
  allSizes: (number | null)[];
  style?: CSSProperties;
}
export type PGridColumnProps = Partial<GridColumnProps>;

export const Column: FC<PGridColumnProps> = ({ children, size = null, allSizes = [], style }) => (
  <StyledGridColumnContainer size={size} allSizes={allSizes} style={style}>
    {children}
  </StyledGridColumnContainer>
);
