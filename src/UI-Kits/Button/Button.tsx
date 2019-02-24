import React, { FC } from 'react';
import { StyledButton } from './Button.styled';

export type ButtonSize = 'default' | 'small' | 'large';
export type ButtonVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'gray'
  | 'primary-outline'
  | 'light-outline'
  | 'invert-outline'
  | 'cast-outline';

export interface ButtonProps {
  text: string;
  type?: 'button' | 'reset' | 'submit';
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export type PartialButtonProps = Partial<ButtonProps>;

export const Button: FC<ButtonProps> = ({ text, ...rest }) => (
  <StyledButton type="button" variant="default" size="default" {...rest}>
    <i>{text}</i>
    <span>{text}</span>
  </StyledButton>
);
