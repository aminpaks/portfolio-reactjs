import React, { FC, ReactElement } from 'react';

import { isChildTypeOf } from '../Utils';
import { Column, PGridColumnProps } from './Column';
import { StyledGridContainer } from './Grid.styled';

export interface GridProps {
  gutter: number;
  unit: string;
  children: ReactElement<PGridColumnProps> | Array<ReactElement<PGridColumnProps> | null> | null;
}

export type PGridProps = Partial<GridProps>;

export const Grid: FC<PGridProps> & { Col: typeof Column } = ({ gutter = 2, unit = 'em', children }) => {
  // Calculate all the children's sizes in an array
  const allSizes: (number | null)[] = [];
  React.Children.forEach(children, child => {
    if (React.isValidElement<PGridColumnProps>(child)) {
      allSizes.push(child.props.size || null);
    } else {
      allSizes.push(null);
    }
  });
  // Map all the children with total sizes
  const updatedChildren = React.Children.map(children, child =>
    isChildTypeOf(Column, child)
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
