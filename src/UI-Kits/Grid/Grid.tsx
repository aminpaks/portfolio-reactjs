import React, { FC, useCallback, useMemo, useState, useEffect } from 'react';
import { StyledGridContainer } from './Grid.styled';
import { Column, PGridColumnProps } from './Column';

export interface GridProps {
  gutter: number;
  unit: string;
}

export type PGridProps = Partial<GridProps>;

export const Grid: FC<PGridProps> & { Col: typeof Column } = ({
  gutter = 2,
  unit = 'em',
  children,
}) => {
  // Calculate all the children's sizes in an array
  const allSizes: (number | null)[] = [];
  React.Children.forEach(children, (child) => {
    if (React.isValidElement<PGridColumnProps>(child)) {
      allSizes.push(child.props.size || null);
    } else {
      allSizes.push(null);
    }
  });
  // Map all the children with total sizes
  const updatedChildren = React.Children.map(children, (child) =>
    React.isValidElement<PGridColumnProps>(child)
      ? React.cloneElement<PGridColumnProps>(child, {
          allSizes,
        })
      : child,
  );

  return (
    <StyledGridContainer gutter={gutter} unit={unit}>
      {updatedChildren}
    </StyledGridContainer>
  );
};
// Static property
Grid.Col = Column;
