import { WithThemeProps } from 'src/Theme';

import { TypographyProps } from './Typography';

export const getColor = ({ colorTheme, theme: { colorSet } }: WithThemeProps<TypographyProps>) => {
  switch (colorTheme) {
    case 'default':
      return colorSet.text;
    case 'primary':
      return colorSet.primary;
    case 'inverted':
      return colorSet.textInverted;
    default:
      return null;
  }
};

export const getFontSize = (props: WithThemeProps<TypographyProps>) => {
  switch (props.variant) {
    case 'title':
      return '3.4rem';
    case 'headline':
      return '2.643rem';
    case 'subheading':
      return '1.428569rem';
    case 'body':
      return '1.07143rem';
    default:
      return 'inherit';
  }
};

export const getFontWeight = (props: WithThemeProps<TypographyProps>) => {
  switch (props.variant) {
    case 'title':
      return '700';
    case 'headline':
    case 'subheading':
      return '600';
    case 'body':
      return '400';
    default:
      return null;
  }
};

export const getCursor = (props: WithThemeProps<TypographyProps>) => {
  switch (props.variant) {
    case 'title':
    case 'headline':
    case 'subheading':
      return 'default';
    default:
      return null;
  }
};
