import React, { ReactElement } from 'react';

/**
 * Very useful in type guard usage of children
 * For example you have multiple type of children and
 * you wanna make types return only one.
 */
export function isOnlyOneChild<T>(
  children: ReactElement<T> | ReactElement<T>[],
): children is ReactElement<T> {
  return React.Children.count(children) === 1;
}
