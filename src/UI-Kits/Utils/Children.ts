import React, { ReactElement, ComponentType, ReactNode } from 'react';

/**
 * Very useful in type guard usage of children
 * For example you have multiple type of children and
 * you wanna make types return only one.
 */
export function isOnlyOneChild<T>(children: ReactElement<T> | ReactElement<T>[]): children is ReactElement<T> {
  return React.Children.count(children) === 1;
}

/**
 * Returns true if a JSX element is type of a component
 *
 * @param component A (class/function) component constructor
 * @param child A JSX element
 */
export function isChildTypeOf<T>(
  component: ComponentType<T>,
  child: ReactNode,
): child is ReactElement<T, (props: T) => ReactElement<T>> {
  if (child != null && (child as any).type === component) {
    return true;
  }
  return false;
}
