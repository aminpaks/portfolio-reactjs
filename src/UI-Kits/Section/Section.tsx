import React, { FC, CSSProperties } from 'react';
import { StyledSection } from './Section.styled';

export interface SectionProps {
  style?: CSSProperties;
  variant?: 'default' | 'fluid';
  backgroundTheme?: 'default' | 'accent' | 'light-gray';
}

export const Section: FC<SectionProps> = ({ variant, backgroundTheme, style, children }) => (
  <StyledSection variant={variant} backgroundTheme={backgroundTheme} style={style}>
    <div>{children}</div>
  </StyledSection>
);
