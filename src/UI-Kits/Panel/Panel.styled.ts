import styled, { fade } from 'src/Theme';

import { PanelComponent } from './Panel';
import { buildVariants, getPaddingValue } from './Util';

export const StyledPanel = styled(PanelComponent)`
  display: block;
  padding: ${getPaddingValue};
  overflow: hidden;
  border-radius: 0.5em;
  box-shadow: 0 0 1em ${props => fade(props.theme.colorSet.text, 0.18)};
  background-color: #fff;

  ${buildVariants};
`;
