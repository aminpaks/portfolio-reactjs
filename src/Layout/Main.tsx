import React, { FC } from 'react';
import { StyledContainer } from './Main.styled';
import { Navigation } from '../Header/Nav';

export const MainLayout: FC<{}> = ({ children }) => (
  <StyledContainer>
    <Navigation />
    {children}
    <div>Footer</div>
  </StyledContainer>
);
