import React, { FC } from 'react';

import { StyledHeader, StyledNavLinksContainer } from './Header.styled';
import { DefaultNavLinks } from './Links';
import { Logo } from './Logo';

export const Header: FC = ({ children = <DefaultNavLinks /> }) => (
  <StyledHeader>
    <div>
      <div>
        <div>
          <Logo />
          <StyledNavLinksContainer>{children}</StyledNavLinksContainer>
        </div>
      </div>
    </div>
  </StyledHeader>
);
