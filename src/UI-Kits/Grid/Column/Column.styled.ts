import styled from 'src/Theme';

import { InternalGridColumnProps } from './types';
import { getSizeValue, getDisplayValue } from './Util';

export const StyledGridColumnContainer = styled.div<InternalGridColumnProps>`
  display: ${getDisplayValue('sm')};
  box-sizing: border-box;
  flex: 0 0 auto;
  flex-basis: ${getSizeValue('sm')};
  max-width: ${getSizeValue('sm')};

  @media (min-width: ${props => props.theme.breakpoints.sm}px) {
    display: ${getDisplayValue('md')};
    flex-basis: ${getSizeValue('md')};
    max-width: ${getSizeValue('md')};
  }
  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    display: ${getDisplayValue('lg')};
    flex-basis: ${getSizeValue('lg')};
    max-width: ${getSizeValue('lg')};
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    display: ${getDisplayValue('xl')};
    flex-basis: ${getSizeValue('xl')};
    max-width: ${getSizeValue('xl')};
  }
  @media (min-width: ${props => props.theme.breakpoints.xl}px) {
    display: ${getDisplayValue('xxl')};
    flex-basis: ${getSizeValue('xxl')};
    max-width: ${getSizeValue('xxl')};
  }

  &:last-of-type {
    margin-left: auto;
  }
`;
