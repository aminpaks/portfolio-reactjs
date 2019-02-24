import styled from 'styled-components';
import { SectionProps } from '.';
import { mediaQuery } from 'src/Device';

const setPosition = ({ variant }: SectionProps): string => {
  if (variant === 'left-curved') {
    return `
      ${mediaQuery.desktopUp} {
        padding-left: 6%;
      }
    `;
  }

  if (variant === 'right-curved') {
    return `
      ${mediaQuery.desktopUp} {
        padding-right: 6%;
      }
    `;
  }

  if (variant === 'fluid') {
    return `
      padding: 0 15%;

      ${mediaQuery.phoneOnly} {
        padding: 0 2%;
      }
    `;
  }

  return '';
};

export const StyledSection = styled.section<SectionProps>`
  padding: 0;
  height: 100%;
  // border: 1px solid blue;

  > div {
    width: 100%;
  }

  ${setPosition}
`;
