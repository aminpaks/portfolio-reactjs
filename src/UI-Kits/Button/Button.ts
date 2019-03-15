import { FC, createElement, cloneElement, ReactElement, MouseEventHandler } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { ButtonGroup } from './Group';
import { StyledButton } from './Button.styled';
import { isElementTypeOf } from '../Utils';

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
  onClick?: MouseEventHandler;
}

export type PartialButtonProps = Partial<ButtonProps>;

const handleClick: MouseEventHandler = event => {
  event.preventDefault();
};

export const Button: FC<ButtonProps> & { Group: FC } = ({ text, type, variant, size, children, onClick }) => {
  let shouldSkipTab = false;
  let shouldSkipClickHandler = false;
  let wrappedChildren: ReactElement<unknown>;

  const absText = text || 'UNKNOWN TEXT';
  const markupChildren = [
    createElement('span', { key: '0', className: 'button-child-element-1' }, absText),
    createElement('span', { key: '1', className: 'button-child-element-2' }, absText),
  ];

  if (children && (isElementTypeOf(Link, children) || isElementTypeOf('a', children))) {
    shouldSkipTab = true;
    shouldSkipClickHandler = true;

    wrappedChildren = cloneElement(
      children as ReactElement<LinkProps>,
      { tabIndex: shouldSkipTab ? 0 : -1, className: 'button-holder-element', onClick },
      markupChildren,
    );
  } else {
    wrappedChildren = createElement('span', { className: 'button-holder-element' }, markupChildren);
  }

  return createElement(
    StyledButton,
    {
      size: size || 'default',
      tabIndex: shouldSkipTab ? -1 : 0,
      type: 'button',
      variant: variant || 'default',
      onClick: shouldSkipClickHandler ? undefined : onClick,
    },
    wrappedChildren,
  );
};
Button.Group = ButtonGroup;
