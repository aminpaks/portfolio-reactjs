import styled, { lighten } from 'src/Theme';
import { StyledButton } from 'src/UI-Kits';

export const StyledSectionContainer = styled.div`
  padding: 2em;
  text-align: center;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${props => lighten(props.theme.colorSet.gray, 1)};
  }

  ${StyledButton} {
    margin: 0.4em 0.6em;
  }
`;
