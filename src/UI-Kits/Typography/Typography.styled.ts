import React from 'react';
import styled, { darken } from 'src/Theme';
import { TypographyComponent, TypographyProps } from './Typography';
import { getFontSize, getFontWeight, getMarginTop, getMarginBottom } from './Util';

export const Typography: React.FC<TypographyProps> = styled(TypographyComponent)`
  font-size: ${getFontSize};
  font-weight: ${getFontWeight};
  margin-top: ${getMarginTop};
  margin-bottom: ${getMarginBottom};

  & + p {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 2.4em;
  }

  /* strikethrough text */
  .strike-text {
    text-decoration: line-through;
  }

  /* underlined text */
  .underline-text {
    text-decoration: underline;
  }

  /* highlighted text */
  mark {
    color: ${(props) => props.theme.colorSet.textInverted};
    background-color: ${(props) => darken(props.theme.colorSet.primary, 0.1)};
    padding: 0.1em 0.4em;
  }
`;
