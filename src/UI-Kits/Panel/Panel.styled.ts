import { FC } from 'react';
import styled, { fade } from 'src/Theme';
import { getPaddingValue, buildVariants } from './Util';
import { PanelComponent, PanelProps } from './Panel';

export const Panel: FC<PanelProps> = styled(PanelComponent)`
  display: block;
  padding: ${getPaddingValue};
  overflow: hidden;
  border-radius: 0.5em;
  box-shadow: 0 0 1.9em ${props => fade(props.theme.colorSet.text, 0.18)};
  background-color: #fff;

  ${buildVariants};
`;
