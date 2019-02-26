import React, { FC, CSSProperties } from 'react';

export type TypographyVariant = 'title' | 'headline' | 'subheading' | 'body';
export type TypographyColorTheme = 'primary' | 'inverted';

export interface TypographyProps {
  component?: 'h2' | 'h3';
  variant: TypographyVariant;
  colorTheme?: TypographyColorTheme;
  text?: string;
  style?: CSSProperties;
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

export const TypographyComponent: FC<TypographyProps> = ({
  children,
  component,
  text,
  variant,
  ...rest
}) => {
  const Component: any = component || getComponentType(variant) || 'h2';
  return (
    <Component {...rest} variant={variant}>
      {children || text}
    </Component>
  );
};
