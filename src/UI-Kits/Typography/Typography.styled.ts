import styled, { darken } from 'src/Theme';
import { TypographyComponent } from './Typography';
import { getColor, getCursor, getFontSize, getFontWeight } from './Util';

export const StyledTypography = styled(TypographyComponent)`
  color: ${getColor};
  font-size: ${getFontSize};
  font-weight: ${getFontWeight};
  margin-top: 0;
  margin-bottom: 0;
  cursor: ${getCursor};

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
    color: ${props => props.theme.colorSet.textInverted};
    background-color: ${props => darken(props.theme.colorSet.primary, 0.1)};
    padding: 0.1em 0.4em;
  }
`;
