import React, { FC } from 'react';
import { StyledFooterContainer } from './Footer.styled';
import { CollapsePadding } from 'src/+Shared/CollapsePadding';
import { Section } from 'src/+Shared';

export const Footer: FC<{}> = () => (
  <CollapsePadding variant="right-s-collapse">
    <StyledFooterContainer>
      <div>
        <Section variant="fluid">
          <div>content is here</div>
        </Section>
      </div>
    </StyledFooterContainer>
  </CollapsePadding>
);
