import styled from 'styled-components';
import { SectionProps } from '.';
import { mediaQuery } from 'src/Device';

const setPosition = ({ variant }: SectionProps): string => {
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
  position: relative;
  ${setPosition}
`;
