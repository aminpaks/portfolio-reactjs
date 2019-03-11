import styled, { getTokenValue, getValueFromShorthand } from 'src/Theme';
import { SpacingComponent } from './Spacing';

export const StyledSpacing = styled(SpacingComponent)`
  margin-top: ${getTokenValue('top', 'spacing', 'margin')};
  margin-right: ${getTokenValue('right', 'spacing', 'margin')};
  margin-bottom: ${getTokenValue('bottom', 'spacing', 'margin')};
  margin-left: ${getTokenValue('left', 'spacing', 'margin')};
  padding-top: ${getTokenValue('top', 'spacing', 'padding')};
  padding-right: ${getTokenValue('right', 'spacing', 'padding')};
  padding-bottom: ${getTokenValue('bottom', 'spacing', 'padding')};
  padding-left: ${getTokenValue('left', 'spacing', 'padding')};
`;
