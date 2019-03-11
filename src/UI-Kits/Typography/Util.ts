import { ThemeProps } from 'src/Theme';
import { TypographyProps } from './Typography';

type TypographyThemeProps = TypographyProps & ThemeProps;

export const getColor = ({ colorTheme, theme: { colorSet } }: TypographyThemeProps) => {
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

export const getFontSize = (props: TypographyProps) => {
  switch (props.variant) {
    case 'title':
      return '3.4em';
    case 'headline':
      return '2em';
    case 'subheading':
      return '1.4em';
    case 'body':
      return '1em';
    default:
      return 'inherit';
  }
};

export const getFontWeight = (props: TypographyProps) => {
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

export const getCursor = (props: TypographyThemeProps) => {
  switch (props.variant) {
    case 'title':
    case 'headline':
    case 'subheading':
      return 'default';
    default:
      return null;
  }
};
