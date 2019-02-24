import React, { FC } from 'react';
import { StyledMainSectionContainer } from './SectionMain.styled';
import { Section } from 'src/+Shared/Section';

export const MainSection: FC<{}> = () => (
  <Section variant="left-curved">
    <StyledMainSectionContainer>
      <div>main section</div>
    </StyledMainSectionContainer>
  </Section>
);
