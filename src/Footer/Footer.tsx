import React, { FC } from 'react';
import { StyledFooterContainer } from './Footer.styled';
import { Section } from 'src/+Shared/Section';

export const Footer: FC<{}> = () => (
  <Section variant="right-curved">
    <StyledFooterContainer>
      <div>
        <Section variant="fluid">
          <div>content is here</div>
        </Section>
      </div>
    </StyledFooterContainer>
  </Section>
);
