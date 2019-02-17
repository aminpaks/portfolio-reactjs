import React, { FC } from 'react';
import { StyledContainer } from './Main.styled';
import { Header } from '../Header/Header';

export const MainLayout: FC<{}> = ({ children }) => (
  <StyledContainer>
    <Header />
    {children}
    <div style={{ height: '100px' }}>Footer</div>
  </StyledContainer>
);
