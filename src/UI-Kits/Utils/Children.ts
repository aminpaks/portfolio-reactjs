import React, {
  ReactElement,
  ComponentType,
  ReactNode,
  ReactHTMLElement,
  ReactHTML,
  HTMLAttributes,
  DetailedHTMLFactory,
} from 'react';

/**
 * Very useful in type guard usage of children
 * For example you have multiple type of children and
 * you wanna make types return only one.
 */
export function isOnlyOneChild<T>(children: ReactElement<T> | ReactElement<T>[]): children is ReactElement<T> {
  return React.Children.count(children) === 1;
}

type OptionalComponentType<T extends string, P> = T extends keyof ReactHTML
  ? ReactElement<unknown, T>
  : ReactElement<P, (props: P) => ReactElement<P> | null>;

/**
 * Returns true if a JSX element is type of a component
 *
 * @param component A (class/function) component constructor
 * @param child A JSX element
 */
export function isElementTypeOf<P, T extends keyof ReactHTML>(
  component: T | ComponentType<P>,
  element: ReactNode,
): element is OptionalComponentType<T, P> {
  if (element != null && (element as any).type === component) {
    return true;
  }
  return false;
}
