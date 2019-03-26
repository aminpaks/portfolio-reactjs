import React from 'react';

import { StyledLoadingWrapper } from './Loading.styled';
import { Spinner } from './Spinner';

export const Loading = () => (
  <StyledLoadingWrapper>
    <div>
      <Spinner />
      <div>Loading</div>
    </div>
  </StyledLoadingWrapper>
);
