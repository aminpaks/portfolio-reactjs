import { Children, cloneElement, createElement, FC } from 'react';

import { mergeClassNames } from '../Utils';
import { SpacingProps } from './types';

export const SpacingComponent: FC<SpacingProps> = ({ children, className, as: asComponent }: SpacingProps) => {
  if (asComponent != null) {
    return createElement(asComponent, { className }, children);
  }
  return cloneElement(Children.only(children)!, { className: mergeClassNames(children!.props.className, className) });
};
