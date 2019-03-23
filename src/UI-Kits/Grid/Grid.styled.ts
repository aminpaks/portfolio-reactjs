import styled, { getPropValue, getNormalizedTokenValue, SpacingToken } from 'src/Theme';

import { StyledGridColumnContainer } from './Column/Column.styled';
import { GridProps } from './types';

export const StyledGridContainer = styled.div<GridProps>`
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  flex-direction: row;
  box-sizing: border-box;
  margin-left: ${getNormalizedTokenValue<GridProps, SpacingToken>({
    propName: 'gutter',
    tokenType: 'spacing',
    normalize: -0.2,
    defaultTokenKey: 'xxl',
  })};
  margin-right: ${getNormalizedTokenValue<GridProps, SpacingToken>({
    propName: 'gutter',
    tokenType: 'spacing',
    normalize: -0.2,
    defaultTokenKey: 'xxl',
  })};

  ${StyledGridColumnContainer} {
    padding-left: ${getNormalizedTokenValue<GridProps, SpacingToken>({
      propName: 'gutter',
      tokenType: 'spacing',
      normalize: 0.2,
      defaultTokenKey: 'xxl',
    })};
    padding-right: ${getNormalizedTokenValue<GridProps, SpacingToken>({
      propName: 'gutter',
      tokenType: 'spacing',
      normalize: 0.2,
      defaultTokenKey: 'xxl',
    })};
  }
`;
