import React, { FC } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import { StyledContainer } from './Main.styled';

export const MainLayout: FC = ({ children }) => (
  <StyledContainer>
    <Header />
    {children}
    <Footer />
  </StyledContainer>
);
