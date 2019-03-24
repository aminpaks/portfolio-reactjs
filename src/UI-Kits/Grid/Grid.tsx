import React, { Children, FC, ReactElement } from 'react';

import { isElementTypeOf } from '../Utils';
import { Column, GridColumnProps, InternalGridColumnProps, ColumnBreakpointSize } from './Column';
import { StyledGridContainer } from './Grid.styled';
import { getSizes, getSizesAsArray } from './Util';
import { GridProps } from './types';

export const Grid: FC<GridProps> & { Col: FC<GridColumnProps> } = ({ gutter, children }) => {
  // Calculate all the children's sizes in an array
  const sizes = [] as ColumnBreakpointSize[];
  Children.forEach<any>(children, (child: ReactElement<GridColumnProps>) => {
    if (isElementTypeOf(Column, child)) {
      const currentSize = getSizes(child.props);
      sizes.push(currentSize);
    }
  });
  const childrenCount = sizes.length;
  const allColumnSizes = getSizesAsArray(childrenCount, sizes);
  // Clone all the children with total sizes as prop
  const updatedChildren = Children.map<ReactElement<InternalGridColumnProps> | null, any>(
    children,
    (child: ReactElement<InternalGridColumnProps>, index) =>
      isElementTypeOf(Column, child)
        ? React.cloneElement(child, {
            size: sizes[index],
            allColumnSizes,
          })
        : null,
  );

  return <StyledGridContainer gutter={gutter}>{updatedChildren}</StyledGridContainer>;
};
// Static property
Grid.Col = Column as any;
