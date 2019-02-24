import React, { FC } from 'react';
import { StyledContainer } from './Main.styled';
import { Header } from 'src/Header/Header';
import { Footer } from 'src/Footer/Footer';

export const MainLayout: FC<{}> = ({ children }) => (
  <StyledContainer>
    <Header />
    {children}
    <Footer />
  </StyledContainer>
);
