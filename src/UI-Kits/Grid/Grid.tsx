import React, { FC, ReactElement, Children } from 'react';

import { isElementTypeOf } from '../Utils';
import { Column, PGridColumnProps } from './Column';
import { StyledGridContainer } from './Grid.styled';

export interface GridProps {
  gutter: number;
  unit: string;
  children: ReactElement<PGridColumnProps> | Array<ReactElement<PGridColumnProps> | null> | null;
}

export type PGridProps = Partial<GridProps>;

export const Grid: FC<PGridProps> & { Col: FC<PGridColumnProps> } = ({ gutter = 2, unit = 'em', children }) => {
  // Calculate all the children's sizes in an array
  const allSizes: (number | null)[] = [];
  Children.forEach<any>(children, (child: ReactElement<PGridColumnProps>) => {
    if (isElementTypeOf(Column, child)) {
      allSizes.push(child.props.size || null);
    } else {
      allSizes.push(null);
    }
  });
  // Clone all the children with total sizes as prop
  const updatedChildren = Children.map<ReactElement<PGridColumnProps> | null, any>(
    children,
    (child: ReactElement<PGridColumnProps>) =>
      isElementTypeOf(Column, child)
        ? React.cloneElement(child, {
            allSizes,
          })
        : null,
  );

  return (
    <StyledGridContainer gutter={gutter} unit={unit}>
      {updatedChildren}
    </StyledGridContainer>
  );
};
// Static property
Grid.Col = Column;
