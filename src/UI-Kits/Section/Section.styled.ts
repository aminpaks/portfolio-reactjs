import styled, { getBreakpoint, useGetBreakpointWidth } from 'src/Theme';

import { SectionProps } from './Section';
import { setBackground, setColor, setPaddingValue, setWidthValue, getMarginValue, setRootBox } from './Utils';

export const StyledSection = styled.section<SectionProps>`
  ${setRootBox};

  > div {
    position: relative;
    padding-top: 2em;
    padding-bottom: 3em;
    @media (min-width: ${getBreakpoint('xl')}) {
      padding-top: 6em;
      padding-bottom: 7.8em;
    }

    &::before {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: block;
      position: absolute;
      ${setBackground};
    }

    > div {
      ${setColor};

      > div {
        ${setPaddingValue};
        ${setWidthValue};
        margin: ${getMarginValue};
        position: relative;
      }
    }
  }
`;
