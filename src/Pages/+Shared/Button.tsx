import React, { FC } from 'react';
import { StyledButton } from './Button.styled';

export type ButtonVariant = 'default' | 'default-outline' | 'primary' | 'secondary';

export interface ButtonProps {
  text: string;
  type?: 'button' | 'reset' | 'submit';
  variant?: ButtonVariant;
}

export type PartialButtonProps = Partial<ButtonProps>;

export const Button: FC<ButtonProps> = ({ text, ...rest }) => (
  <StyledButton type="button" variant="default" {...rest}>
    <i>{text}</i>
    <span>{text}</span>
  </StyledButton>
);
