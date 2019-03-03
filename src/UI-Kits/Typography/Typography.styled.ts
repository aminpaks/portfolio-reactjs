import styled, { darken } from 'src/Theme';
import { TypographyComponent } from './Typography';
import {
  getColor,
  getCursor,
  getFontSize,
  getFontWeight,
  getMarginBottom,
  getMarginTop,
} from './Util';

export const StyledTypography = styled(TypographyComponent)`
  cursor: ${getCursor};
  color: ${getColor};
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
