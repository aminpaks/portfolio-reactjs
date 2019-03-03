import styled, { WithThemeProps, lighten } from 'src/Theme';
import { mediaQuery, breakpoints } from 'src/Device';
import { SectionProps } from './Section';
import { StyledTypography } from '../Typography/Typography.styled';

const setWidthValue = ({ variant }: SectionProps) => {
  switch (variant) {
    case 'fluid':
      return null;
    case 'default':
    default:
      return `${mediaQuery.desktopMin} { width: ${breakpoints.desktop}px; }`;
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
      return `background-color: ${lighten(colorSet.gray, 1.14)}`;

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

const setTypographyDetails = ({ backgroundTheme }: WithThemeProps<SectionProps>) => {
  switch (backgroundTheme) {
    case 'accent':
      return ` ${StyledTypography} { font-weight: 600; color: #fff; }`;
    default:
      return null;
  }
};

export const StyledSection = styled.section<SectionProps>`
  padding-top: 2em;
  padding-bottom: 3em;
  ${mediaQuery.desktopMin} {
    padding-top: 6em;
    padding-bottom: 7.8em;
  }

  ${setBackgroundColor};
  ${StyledTypography} {
    &:first-child {
      margin-top: 1em;
    }
  }
  ${setTypographyDetails};

  > div {
    ${setPaddingValue};
    ${setWidthValue};
    margin: ${getMarginValue};
    position: relative;
  }
`;
