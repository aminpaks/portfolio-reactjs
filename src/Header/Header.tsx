import React, { FC } from 'react';
import { StyledHeader, StyledNavLogoContainer, StyledNavLinksContainer } from './Header.styled';
import { DefaultNavLinks } from './Links';
import { Section } from 'src/UI-Kits';

export interface HeaderProps {
  logo?: React.ReactElement<any> | null;
}

const DefaultLogo = () => <img src="https://brandongaille.com/wp-content/uploads/2013/07/Dell-Company-Logo.jpg" />;

export const Header: FC<HeaderProps> = ({ logo = <DefaultLogo />, children = <DefaultNavLinks /> }) => (
  <StyledHeader>
    <div>
      <div>
        <div>
          {logo != null && <StyledNavLogoContainer>{logo}</StyledNavLogoContainer>}
          <StyledNavLinksContainer>{children}</StyledNavLinksContainer>
        </div>
      </div>
    </div>
  </StyledHeader>
);
