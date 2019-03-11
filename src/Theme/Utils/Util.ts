import { isDev } from 'src/Utils';
import { PropertySide, WithThemeProps, CSSShorthandProperty, TokenType, TokenValue } from '../types';

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

const mapTokenToValue = <T extends string, U extends string>(
  tokens: TokenValue,
  property: CSSShorthandProperty<T>,
): CSSShorthandProperty<U> => {
  return property.reduce(
    (acc, cur, index) => {
      if (cur == null) {
        return acc;
      }
      acc[index] = cur === '0' ? '0' : tokens[cur];
      return acc;
    },
    Array(property.length) as CSSShorthandProperty<any>,
  );
};

export const getTokenValue = <T extends {}>(side: PropertySide, tokenType: TokenType, propName: keyof T) => (
  props: WithThemeProps<T>,
) => {
  const propValue = props[propName] as unknown;
  const tokens = props.theme.tokens[tokenType];
  if (propValue != null) {
    return getValueFromShorthand(side, mapTokenToValue(tokens, propValue as CSSShorthandProperty<string>));
  }
  return null;
};