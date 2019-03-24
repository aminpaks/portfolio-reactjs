import { isDev } from 'src/Utils';
import { PropertySide, WithThemeProps, CSSShorthandProperty, TokenType, TokenValue, ViewBreakpoint } from '../types';

const parseCSSValue = (input: string) => {
  const [, potentialValue, potentialUnit] = /(\d+(?:\.\d+)?)(\w+)?/i.exec(input) || [undefined, '0', 'em'];
  return { value: parseFloat(potentialValue), unit: potentialUnit };
};

export const getPropValue = <T>({
  prop,
  defaultValue,
  normalize = 1,
}: {
  prop: Extract<keyof T, string>;
  defaultValue?: string;
  normalize?: number;
}) => (props: T) => {
  const propertyValue: any = props[prop] || defaultValue;
  if (propertyValue == null) {
    return undefined;
  }
  const { value, unit } = parseCSSValue(propertyValue);
  return value === 0 ? '0' : (value * normalize).toFixed(2) + unit;
};

export const getValueFromShorthand = <T>(side: 'top' | 'right' | 'left' | 'bottom', components?: [T, T?, T?, T?]) => {
  const [top = '0', right, bottom, left] = components || [null, undefined, undefined, undefined];
  switch (side) {
    case 'top':
      return top;
    case 'right':
      return right || top;
    case 'bottom':
      return bottom || top;
    case 'left':
      return left || right || top;
    default:
      throw new TypeError('Side is not a valid side type');
  }
};

const validateCssShorthandProperty = <T extends string>(value?: CSSShorthandProperty<T> | null) => {
  if (value == null || !Array.isArray(value) || value.length <= 0 || value.length <= 4) {
    throw new TypeError('CSS components must be an array with at least one element');
  }
};

const validTokens = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

const mapTokenToValue = <T extends string, U extends string>(
  tokens: TokenValue,
  property: CSSShorthandProperty<T>,
): CSSShorthandProperty<U> => {
  return property.reduce(
    (acc, cur, index) => {
      if (cur == null) {
        return acc;
      }
      acc[index] = validTokens.includes(cur) ? tokens[cur] : cur;
      return acc;
    },
    Array(property.length) as CSSShorthandProperty<any>,
  );
};

export const getTokenValue = <T extends {}, U extends string>(
  side: PropertySide,
  tokenType: TokenType,
  propName: keyof T,
  defaultValue?: CSSShorthandProperty<U>,
) => (props: WithThemeProps<T>) => {
  const propValue = (props[propName] as unknown) || defaultValue;
  const tokens = props.theme.tokens[tokenType];
  if (propValue != null) {
    return getValueFromShorthand(side, mapTokenToValue(tokens, propValue as CSSShorthandProperty<string>));
  }
  return null;
};

export const getNormalizedTokenValue = <T, TokenKey extends string>({
  tokenType,
  propName,
  normalize,
  defaultTokenKey,
}: {
  tokenType: TokenType;
  propName: Extract<keyof T, string>;
  normalize?: number;
  defaultTokenKey?: TokenKey;
}) => (props: WithThemeProps<T>) => {
  const tokenKey = (props[propName] as unknown) || defaultTokenKey;
  const tokens = props.theme.tokens[tokenType];
  if (tokenKey != null) {
    const potentialValue = tokens[tokenKey as string];

    if (potentialValue) {
      const { value, unit } = parseCSSValue(potentialValue);
      const computedValue = (value * (normalize || 1)).toFixed(2).replace(/\.00$/, '');

      return computedValue === '0' ? '0' : computedValue + unit;
    }
  }
  return null;
};

export const getBreakpoint = <T>(breakpoint: ViewBreakpoint, normalizer?: (value: number) => number) => ({
  theme: { breakpoints },
}: WithThemeProps<T>) => {
  let value = breakpoints[breakpoint];

  if (typeof normalizer === 'function') {
    value = normalizer(value);
    if (isDev() && value != null) {
      throw new Error('Normalizer returned undefined value, did you forgot to return a value?');
    }
  }
  return value + 'px';
};
