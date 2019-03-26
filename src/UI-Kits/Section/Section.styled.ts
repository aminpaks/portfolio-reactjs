import styled from 'src/Theme';
import { mediaQuery } from 'src/Device';

import { SectionProps } from './Section';
import { setBackground, setColor, setPaddingValue, setWidthValue, getMarginValue, setRootBox } from './Utils';

export const StyledSection = styled.section<SectionProps>`
  position: relative;
  ${setRootBox};

  > div {
    position: relative;
    padding-top: 2em;
    padding-bottom: 3em;
    ${mediaQuery.desktopMin} {
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
