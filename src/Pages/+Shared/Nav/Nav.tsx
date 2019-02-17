import React, { FC } from 'react';
import { StyledNavContainer, StyledNavLogoContainer, StyledNavLinksContainer } from './Nav.styled';
import { DefaultNavLinks } from './Links';

export interface NavigationProps {
  logo?: React.ReactElement<any>;
}

const DefaultLogo = () => (
  <img src="https://brandongaille.com/wp-content/uploads/2013/07/Dell-Company-Logo.jpg" />
);

export const Navigation: FC<NavigationProps> = ({
  logo = <DefaultLogo />,
  children = <DefaultNavLinks />,
}) => (
  <StyledNavContainer>
    <div>
      {logo != null && <StyledNavLogoContainer>{logo}</StyledNavLogoContainer>}
      <StyledNavLinksContainer>{children}</StyledNavLinksContainer>
    </div>
  </StyledNavContainer>
);
