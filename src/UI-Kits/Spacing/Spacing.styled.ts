import styled, { getTokenValue, getValueFromShorthand } from 'src/Theme';
import { SpacingComponent } from './Spacing';

export const StyledSpacing = styled(SpacingComponent)`
  margin-top: ${getTokenValue({ side: 'top', tokenType: 'spacing', propName: 'margin' })};
  margin-right: ${getTokenValue({ side: 'right', tokenType: 'spacing', propName: 'margin' })};
  margin-bottom: ${getTokenValue({ side: 'bottom', tokenType: 'spacing', propName: 'margin' })};
  margin-left: ${getTokenValue({ side: 'left', tokenType: 'spacing', propName: 'margin' })};
  padding-top: ${getTokenValue({ side: 'top', tokenType: 'spacing', propName: 'padding' })};
  padding-right: ${getTokenValue({ side: 'right', tokenType: 'spacing', propName: 'padding' })};
  padding-bottom: ${getTokenValue({ side: 'bottom', tokenType: 'spacing', propName: 'padding' })};
  padding-left: ${getTokenValue({ side: 'left', tokenType: 'spacing', propName: 'padding' })};
`;
