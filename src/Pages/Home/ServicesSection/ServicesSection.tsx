import React, { FC } from 'react';

import { Section } from 'src/UI-Kits';
import { StyledServicesSectionContainer } from './ServicesSection.styled';

export const ServicesSection: FC = () => (
  <Section style={{ height: '300px' }}>
    <StyledServicesSectionContainer>ServicesSection</StyledServicesSectionContainer>
  </Section>
);
