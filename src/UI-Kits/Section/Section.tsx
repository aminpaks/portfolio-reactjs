import React, { FC, CSSProperties } from 'react';
import { StyledSection } from './Section.styled';

export interface SectionProps {
  style?: CSSProperties;
  variant?: 'default' | 'fluid' | 'left-round' | 'right-round';
  backgroundTheme?: 'default' | 'accent' | 'light-gray' | [string, string];
}

export const Section: FC<SectionProps> = ({ variant, backgroundTheme, style, children }) => (
  <StyledSection variant={variant} backgroundTheme={backgroundTheme} style={style}>
    <div>
      <div>
        <div>{children}</div>
      </div>
    </div>
  </StyledSection>
);
