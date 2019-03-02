import React, { FC } from 'react';
import { StyledServicesSectionContainer } from './ServicesSection.styled';
import { Section } from 'src/+Shared/Section';

export const ServicesSection: FC = () => (
  <Section style={{ height: '300px' }}>
    <StyledServicesSectionContainer>ServicesSection</StyledServicesSectionContainer>
  </Section>
);
