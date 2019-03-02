import styled, { WithThemeProps, lighten } from 'src/Theme';
import { SectionProps } from '.';
import { mediaQuery, breakpoints } from 'src/Device';

const setWidthValue = ({ variant }: SectionProps) => {
  switch (variant) {
    case 'fluid':
      return null;
    case 'default':
    default:
      return `${mediaQuery.desktopUp} { width: ${breakpoints.desktopUp}; }`;
  }
};

const getMarginValue = ({ variant }: SectionProps) => {
  switch (variant) {
    case 'fluid':
      return null;
    case 'default':
    default:
      return '0 auto';
  }
};

const setPaddingValue = ({ variant }: SectionProps) => {
  if (variant === 'default') {
    return `
      padding-left: 15%;
      padding-right: 15%;

      ${mediaQuery.phoneOnly} {
        padding-left: 2%;
        padding-right: 2%;
      }
    `;
  }

  return null;
};

const setBackgroundColor = ({
  backgroundTheme,
  theme: { colorSet },
}: WithThemeProps<SectionProps>) => {
  switch (backgroundTheme) {
    case 'light-gray':
      return `background-color: ${lighten(colorSet.gray, 1)}`;

    case 'accent':
      return `background-image: linear-gradient(to top, ${colorSet.secondary}, ${lighten(
        colorSet.secondary,
        0.1,
      )})`;

    case 'default':
    default:
      return null;
  }
};

export const StyledSection = styled.section<SectionProps>`
  padding-top: 2em;
  padding-bottom: 3em;
  ${mediaQuery.desktopUp} {
    padding-top: 6em;
    padding-bottom: 7.8em;
  }

  ${setBackgroundColor};

  > div {
    ${setPaddingValue};
    ${setWidthValue};
    margin: ${getMarginValue};
    position: relative;
  }
`;
