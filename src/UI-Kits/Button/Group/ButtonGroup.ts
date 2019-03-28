import { FC, createElement } from 'react';

import styled, { getTokenValue, CSSShorthandProperty, SpacingToken } from 'src/Theme';
import { ButtonGroupProps } from './types';
import { StyledButton } from '../Button.styled';

const defaultSpacingValue: CSSShorthandProperty<SpacingToken> = ['xs'];

export const StyledButtonGroup = styled.div<ButtonGroupProps>`
  margin-left: ${getTokenValue({
    side: 'left',
    tokenType: 'spacing',
    propName: 'spacing',
    defaultValue: defaultSpacingValue,
    normalizer: v => v * -1,
  })};
  margin-right: ${getTokenValue({
    side: 'right',
    tokenType: 'spacing',
    propName: 'spacing',
    defaultValue: defaultSpacingValue,
    normalizer: v => v * -1,
  })};
  ${StyledButton} {
    margin-top: ${getTokenValue({
      side: 'top',
      tokenType: 'spacing',
      propName: 'spacing',
      defaultValue: defaultSpacingValue,
    })};
    margin-right: ${getTokenValue({
      side: 'right',
      tokenType: 'spacing',
      propName: 'spacing',
      defaultValue: defaultSpacingValue,
    })};
    margin-bottom: ${getTokenValue({
      side: 'bottom',
      tokenType: 'spacing',
      propName: 'spacing',
      defaultValue: defaultSpacingValue,
    })};
    margin-left: ${getTokenValue({
      side: 'left',
      tokenType: 'spacing',
      propName: 'spacing',
      defaultValue: defaultSpacingValue,
    })};
  }
`;

const ButtonGroupComponent: FC<ButtonGroupProps> = ({ children, className }) => {
  return createElement('div', { className }, children);
};

export const ButtonGroup = StyledButtonGroup.withComponent(ButtonGroupComponent) as FC<ButtonGroupProps>;
