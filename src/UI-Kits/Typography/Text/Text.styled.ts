import styled from 'src/Theme';

import { TypographyTextComponent } from './Text';
import { TypographyVariant } from '../Typography';
import { StyledTypography } from '../Typography.styled';

export const getMarginTop = (variant: TypographyVariant) => {
  switch (variant) {
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

export const getMarginBottom = (variant: TypographyVariant) => {
  switch (variant) {
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

export const StyledTypographyText = styled(TypographyTextComponent)`
  ${StyledTypography} {
    &[data-variant='body'] {
      margin-top: ${getMarginTop('body')};
      margin-bottom: ${getMarginBottom('body')};
    }
    &[data-variant='headline'] {
      :not(:first-child) {
        margin-top: ${getMarginTop('headline')};
      }
      margin-bottom: ${getMarginBottom('headline')};
    }
    &[data-variant='subheading'] {
      margin-top: ${getMarginTop('subheading')};
      margin-bottom: ${getMarginBottom('subheading')};
    }
    &[data-variant='title'] {
      :not(:first-child) {
        margin-top: ${getMarginTop('title')};
      }
      margin-bottom: ${getMarginBottom('title')};
    }
  }
`;
