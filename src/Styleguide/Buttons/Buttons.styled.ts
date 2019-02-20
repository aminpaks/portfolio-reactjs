import styled, { getForegroundColor, lighten } from '../../Theme';
import { StyledButton } from '../../Pages/+Shared';

export const StyledSectionContainer = styled.div<{ background?: string }>`
  padding: 2em;
  text-align: center;
  color: ${(props) => getForegroundColor(props.background || '#fff', props.theme.colorSet)};
  background-color: ${(props) => props.background};

  &:not(:last-of-type) {
    border-bottom: 1px solid ${(props) => lighten(props.theme.colorSet.gray, 1)};
  }

  ${StyledButton} {
    margin: 0.4em 0.6em;
  }
`;
