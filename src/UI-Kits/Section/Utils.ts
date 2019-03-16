import { WithThemeProps, lighten, mixWith, shouldUseDarkForeground, fade } from 'src/Theme';

import { SectionProps } from './Section';
import { StyledButton } from '../Button/Button.styled';
import { StyledPanel } from '../Panel/Panel.styled';
import { StyledTypography } from '../Typography/Typography.styled';

const throwTypeError = <T>(name: string, type: T) => {
  throw new TypeError(`Invalid ${name} prop as "${String(type)}" for <Section />`);
};

const isArrayColor = (input: unknown): input is [string, string] => Array.isArray(input) && input.length === 2;

export const setWidthValue = ({ variant = 'default', theme: { breakpoints } }: WithThemeProps<SectionProps>) => {
  switch (variant) {
    case 'fluid':
      return null;

    case 'left-round':
    case 'right-round':
    case 'default':
      return `
@media screen and (min-width: ${breakpoints.lg}px) { width: calc(${breakpoints.lg}px - 2.4rem); }
@media screen and (min-width: ${breakpoints.xl}px) { width: calc(${breakpoints.xl}px - 4.8rem); }
@media screen and (min-width: ${breakpoints.xxl}px) { width: calc(${breakpoints.xl}px - 4.8rem); }
      `;

    default:
      throwTypeError('variant', variant);
  }
};

export const getMarginValue = ({ variant = 'default' }: SectionProps) => {
  switch (variant) {
    case 'fluid':
      return null;

    case 'left-round':
    case 'right-round':
    case 'default':
      return '0 auto';

    default:
      throwTypeError('variant', variant);
  }
};

export const setPaddingValue = ({ variant = 'default', theme: { breakpoints } }: WithThemeProps<SectionProps>) => {
  switch (variant) {
    case 'fluid':
      return null;

    case 'left-round':
    case 'right-round':
    case 'default':
      return `
padding-left: 1.2rem;
padding-right: 1.2rem;

@media screen and (min-width: ${breakpoints.xl}px) {
  padding-left: 2.4rem;
  padding-right: 2.4rem;
}
    `;

    default:
      throwTypeError('variant', variant);
  }
};

export const setBackground = ({
  variant = 'default',
  backgroundTheme = 'default',
  theme: { colorSet, breakpoints },
}: WithThemeProps<SectionProps>) => {
  let borderRadius: string = '';

  switch (variant) {
    case 'left-round':
      borderRadius = `
@media screen and (max-width: ${breakpoints.xl}px) { border-radius: 0 0 0 3em; }
@media screen and (min-width: ${breakpoints.xl + 1}px) { border-radius: 0 0 0 7.8em; }`;
      break;

    case 'right-round':
      borderRadius = `
@media screen and (max-width: ${breakpoints.xl}px) { border-radius: 0 3em 0 0; }
@media screen and (min-width: ${breakpoints.xl + 1}px) { border-radius: 0 7.8em 0 0; }`;
      break;
  }

  switch (backgroundTheme) {
    case 'light-gray':
      return `background-color: ${lighten(colorSet.gray, 1.14)};${borderRadius} content: '';`;

    case 'accent':
      return `background-image: linear-gradient(to top, ${colorSet.secondary}, ${lighten(
        colorSet.secondary,
        0.06,
      )});${borderRadius} content: '';`;

    case 'default':
      return null;

    default: {
      if (isArrayColor(backgroundTheme)) {
        return `background-image: linear-gradient(to top, ${backgroundTheme[0]}, ${
          backgroundTheme[1]
        }); ${borderRadius} content: '';`;
      } else {
        throwTypeError('backgroundTheme', backgroundTheme);
      }
    }
  }
};

export const setColor = ({ backgroundTheme = 'default', theme: { colorSet } }: WithThemeProps<SectionProps>) => {
  let backgroundColor: string = '';
  switch (backgroundTheme) {
    case 'accent':
      backgroundColor = colorSet.secondary;
      break;

    case 'light-gray':
      backgroundColor = lighten(colorSet.gray, 1.14);
      break;

    case 'default':
      return null;

    default: {
      if (isArrayColor(backgroundTheme)) {
        backgroundColor = mixWith(backgroundTheme[0], backgroundTheme[1], 1);
      } else {
        throwTypeError('backgroundTheme', backgroundTheme);
      }
    }
  }

  const shouldUseLightForeground = !shouldUseDarkForeground(backgroundColor);

  if (shouldUseLightForeground) {
    return `
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
${StyledButton} {
  &:focus:not(:hover),:focus-within:not(:hover) {
    outline-color: ${fade('#fff', 0.4)};
  }
}`;
  }

  return null;
};

export const setRootBox = ({ variant = 'default', theme: { breakpoints } }: WithThemeProps<SectionProps>) => {
  switch (variant) {
    case 'left-round':
      return `
@media screen and (min-width: ${breakpoints.xxl}px) {
  padding-left: 6%;
  > div {

    > div { margin-left: -6%; }
  }
}`;

    case 'right-round':
      return `
@media screen and (min-width: ${breakpoints.xxl}px) {
  padding-right: 6%;
  > div > div { margin-right: -6%; }
}`;

    case 'default':
    case 'fluid':
      return null;

    default:
      throwTypeError('variant', variant);
  }
};
