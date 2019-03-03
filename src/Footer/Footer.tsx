import React, { FC } from 'react';

import { Section } from 'src/UI-Kits';
import { CollapsePadding } from 'src/+Shared';
import { StyledFooterContainer } from './Footer.styled';

export const Footer: FC = () => (
  <CollapsePadding variant="right-s-collapse">
    <StyledFooterContainer>
      <div>
        <Section>
          <div>content is here</div>
        </Section>
      </div>
    </StyledFooterContainer>
  </CollapsePadding>
);
