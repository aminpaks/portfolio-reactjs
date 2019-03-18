import styled from 'src/Theme';

import { InternalGridColumnProps } from './types';
import { getSizeValue } from './Util';

export const StyledGridColumnContainer = styled.div<InternalGridColumnProps>`
  display: block;
  box-sizing: border-box;
  flex: 0 0 auto;
  flex-basis: ${getSizeValue('sm')};
  max-width: ${getSizeValue('sm')};

  @media (min-width: ${props => props.theme.breakpoints.sm}px) {
    flex-basis: ${getSizeValue('md')};
    max-width: ${getSizeValue('md')};
  }
  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    flex-basis: ${getSizeValue('lg')};
    max-width: ${getSizeValue('lg')};
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    flex-basis: ${getSizeValue('xl')};
    max-width: ${getSizeValue('xl')};
  }
  @media (min-width: ${props => props.theme.breakpoints.xl}px) {
    flex-basis: ${getSizeValue('xxl')};
    max-width: ${getSizeValue('xxl')};
  }

  &:last-of-type {
    margin-left: auto;
  }
`;
