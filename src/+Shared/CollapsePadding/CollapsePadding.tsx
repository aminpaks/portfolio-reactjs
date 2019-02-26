import React, { FC } from 'react';
import { StyledCollapsePadding } from './CollapsePadding.styled';

export interface CollapsePaddingProps {
  variant: 'default' | 'right-s-collapse' | 'left-s-collapse' | 'left-l-collapse';
}

export const CollapsePadding: FC<CollapsePaddingProps> = ({ children, variant }) => (
  <StyledCollapsePadding variant={variant}>{children}</StyledCollapsePadding>
);
