import React, { FC } from 'react';
import { StyledServicesSectionContainer } from './ServicesSection.styled';
import { Section } from 'src/+Shared/Section';

export const ServicesSection: FC<{}> = () => (
  <Section variant="fluid">
    <StyledServicesSectionContainer>
      <div>ServicesSection</div>
    </StyledServicesSectionContainer>
  </Section>
);
