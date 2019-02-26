import styled from 'styled-components';
import { CollapsePaddingProps } from '.';
import { mediaQuery } from 'src/Device';

const setPadding = ({ variant = 'default' }: CollapsePaddingProps): string => {
  const sPadding = 6;

  if (variant === 'left-s-collapse') {
    return `
      ${mediaQuery.desktopUp} {
        padding-left: ${sPadding}%;
      }
    `;
  }

  if (variant === 'left-l-collapse') {
    return `
      ${mediaQuery.desktopUp} {
        padding-left: 15%;
      }
    `;
  }

  if (variant === 'right-s-collapse') {
    return `
      ${mediaQuery.desktopUp} {
        padding-right: ${sPadding}%;
      }
    `;
  }

  return '';
};

export const StyledCollapsePadding = styled.div<CollapsePaddingProps>`
  padding: 0;
  height: 100%;
  // border: 1px solid blue;

  ${setPadding}
`;
