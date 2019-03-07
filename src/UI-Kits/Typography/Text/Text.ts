import { FC, createElement } from 'react';

import { TypographyTextProps } from './types';

export const TypographyTextComponent: FC<TypographyTextProps> = ({
  component,
  className,
  children,
}) => createElement(component || 'div', { className }, children);
