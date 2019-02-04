import React, { FC } from 'react';
import { StyledContainer } from './Main.styled';
import { Navigation } from './Nav';

export const MainLayout: FC<{}> = ({ children }) => (
  <StyledContainer>
    <Navigation />
    {children}
  </StyledContainer>
);
