import { FC, CSSProperties, createElement, ComponentType } from 'react';

export type TypographyVariant = 'title' | 'headline' | 'subheading' | 'body';
export type TypographyColorTheme = 'default' | 'primary' | 'inverted';

export interface TypographyProps {
  component?: string | ComponentType<any>;
  variant: TypographyVariant;
  colorTheme?: TypographyColorTheme;
  text?: string;
  style?: CSSProperties;
  className?: string;
}

const getComponentType = (variant: TypographyVariant) => {
  switch (variant) {
    case 'title':
    case 'headline':
    case 'subheading':
      return 'h2';
    case 'body':
      return 'p';
    default:
      return null;
  }
};

export const TypographyComponent: FC<TypographyProps> = ({ children, className, component, style, text, variant }) => {
  const componentType = component || getComponentType(variant) || 'h2';
  return createElement(componentType, { style, className, 'data-variant': variant }, children || text || null);
};
