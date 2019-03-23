import React, { FC } from 'react';
import { StyledGridColumnContainer } from './Column.styled';
import { InternalGridColumnProps } from './types';

export const Column: FC<InternalGridColumnProps> = ({ size, allColumnSizes, style, children }) => (
  <StyledGridColumnContainer size={size} allColumnSizes={allColumnSizes} style={style} data-testid="uikits-grid-column">
    {children}
  </StyledGridColumnContainer>
);
