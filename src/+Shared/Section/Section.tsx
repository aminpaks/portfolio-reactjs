import React, { FC } from 'react';
import { StyledSection } from './Section.styled';

export interface SectionProps {
  variant?: 'fluid' | 'normal';
}

export const Section: FC<SectionProps> = ({ children, variant }) => (
  <StyledSection variant={variant}>{children}</StyledSection>
);
