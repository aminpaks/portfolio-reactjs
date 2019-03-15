import { FC, createElement } from 'react';

import styled, { getTokenValue, CSSShorthandProperty, SpacingToken } from 'src/Theme';
import { ButtonGroupProps } from './types';
import { StyledButton } from '../Button.styled';

const defaultSpacingValue: CSSShorthandProperty<SpacingToken> = ['xs'];

export const StyledButtonGroup = styled.div<ButtonGroupProps>`
  ${StyledButton} {
    margin-top: ${getTokenValue('top', 'spacing', 'spacing', defaultSpacingValue)};
    margin-right: ${getTokenValue('right', 'spacing', 'spacing', defaultSpacingValue)};
    margin-bottom: ${getTokenValue('bottom', 'spacing', 'spacing', defaultSpacingValue)};
    margin-left: ${getTokenValue('left', 'spacing', 'spacing', defaultSpacingValue)};
  }
`;

const ButtonGroupComponent: FC<ButtonGroupProps> = ({ children, className }) => {
  return createElement('div', { className }, children);
};

export const ButtonGroup = StyledButtonGroup.withComponent(ButtonGroupComponent) as FC<ButtonGroupProps>;
