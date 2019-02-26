import React, { FC } from 'react';
import { StyledMainSectionContainer } from './SectionMain.styled';
import { CollapsePadding } from 'src/+Shared/CollapsePadding';

export const MainSection: FC<{}> = () => (
  <CollapsePadding variant="left-s-collapse">
    <StyledMainSectionContainer>
      <div>main section</div>
    </StyledMainSectionContainer>
  </CollapsePadding>
);
