import styled, { fade } from 'src/Theme';
import { getPaddingValue, buildVariants } from './Util';
import { PanelComponent } from './Panel';

export const StyledPanel = styled(PanelComponent)`
  display: block;
  padding: ${getPaddingValue};
  overflow: hidden;
  border-radius: 0.5em;
  box-shadow: 0 0 1em ${props => fade(props.theme.colorSet.text, 0.18)};
  background-color: #fff;

  ${buildVariants};
`;
