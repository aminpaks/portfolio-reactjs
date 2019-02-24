import styled from 'src/Theme';
import { GridProps } from './Grid';
import { StyledGridColumnContainer } from './Column.styled';

const getGutterValue = ({ gutter, unit }: GridProps) => {
  const halfValue = gutter / 2;
  return Number.isNaN(halfValue) ? undefined : halfValue + unit;
};

export const StyledGridContainer = styled.div<GridProps>`
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  flex-direction: row;
  box-sizing: border-box;
  margin-left: -${getGutterValue};
  margin-right: -${getGutterValue};

  ${StyledGridColumnContainer} {
    padding-left: ${getGutterValue};
    padding-right: ${getGutterValue};
  }
`;
