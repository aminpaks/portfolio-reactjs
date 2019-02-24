import { TypographyProps } from './Typography';

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

export const getMarginTop = (props: TypographyProps) => {
  switch (props.variant) {
    case 'title':
      return '1.6em';
    case 'headline':
      return '2em';
    case 'subheading':
      return '2.5em';
    case 'body':
    default:
      return '1em';
  }
};

export const getMarginBottom = (props: TypographyProps) => {
  switch (props.variant) {
    case 'title':
      return '0.3em';
    case 'headline':
      return '0.5em';
    case 'subheading':
      return '0.75em';
    case 'body':
      return '1em';
    default:
      return '0.4em';
  }
};
