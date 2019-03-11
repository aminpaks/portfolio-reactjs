import React from 'react';

import { Spacing } from 'src/UI-Kits';
import { StyledUnorderedList } from './ServiceList.styled';

export const ServiceList = () => (
  <Spacing margin={['md', 'lg', '0']}>
    <StyledUnorderedList>
      <li>Concept Development</li>
      <li>UI Design</li>
      <li>App Management</li>
      <li>Software QA</li>
      <li>App Integration</li>
      <li>Regular Updates</li>
    </StyledUnorderedList>
  </Spacing>
);
