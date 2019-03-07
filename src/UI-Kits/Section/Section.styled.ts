import styled, { WithThemeProps, lighten } from 'src/Theme';
import { mediaQuery, breakpoints } from 'src/Device';

import { SectionProps } from './Section';
import { StyledPanel } from '../Panel/Panel.styled';
import { StyledTypography } from '../Typography/Typography.styled';

const setWidthValue = ({ variant }: SectionProps) => {
  switch (variant) {
    case 'fluid':
      return null;
    case 'default':
    default:
      return `
${mediaQuery.tabletLandscapeMin} { width: calc(${breakpoints.tabletLandscape}px - 4.8rem); }
${mediaQuery.desktopMin} { width: calc(${breakpoints.desktop}px - 4.8rem); }
      `;
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
  switch (variant) {
    case 'fluid':
      return null;
    case 'default':
    default:
      return `
padding-left: 1.2rem;
padding-right: 1.2rem;

${mediaQuery.tabletPortraitMin} {
  padding-left: 2.4rem;
  padding-right: 2.4rem;
}
    `;
  }
};

const setBackgroundColor = ({
  backgroundTheme,
  theme: { colorSet },
}: WithThemeProps<SectionProps>) => {
  switch (backgroundTheme) {
    case 'light-gray':
      return `background-color: ${lighten(colorSet.gray, 1.14)}`;

    case 'accent':
      return `
background-image: linear-gradient(to top, ${colorSet.secondary}, ${lighten(
        colorSet.secondary,
        0.1,
      )});
color: ${colorSet.textInverted};
${StyledPanel} {
  color: ${colorSet.text};
}
${StyledTypography}[data-variant="body"] {
  font-weight: 700;
}
${StyledPanel} ${StyledTypography}[data-variant="body"] {
  font-weight: 400;
}
      `;

    case 'default':
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

  > div {
    ${setPaddingValue};
    ${setWidthValue};
    margin: ${getMarginValue};
    position: relative;
  }
`;
