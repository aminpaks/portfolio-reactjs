import React, { FC } from 'react';

import { Header } from 'src/Header';
import { Footer } from 'src/Footer';
import { StyledContainer } from './Main.styled';

export const MainLayout: FC<{}> = ({ children }) => (
  <StyledContainer>
    <Header logo={null} />
    {children}
    <Footer />
  </StyledContainer>
);
