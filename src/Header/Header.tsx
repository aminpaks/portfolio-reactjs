import React, { FC } from 'react';
import { StyledHeader, StyledNavLogoContainer, StyledNavLinksContainer } from './Header.styled';
import { DefaultNavLinks } from './Links';
import { Section } from 'src/+Shared/Section';

export interface HeaderProps {
  logo?: React.ReactElement<any>;
}

const DefaultLogo = () => (
  <img src="https://brandongaille.com/wp-content/uploads/2013/07/Dell-Company-Logo.jpg" />
);

export const Header: FC<HeaderProps> = ({
  logo = <DefaultLogo />,
  children = <DefaultNavLinks />,
}) => (
  <StyledHeader>
    <Section variant="left-curved">
      <div>
        {logo != null && <StyledNavLogoContainer>{logo}</StyledNavLogoContainer>}
        <StyledNavLinksContainer>{children}</StyledNavLinksContainer>
      </div>
    </Section>
  </StyledHeader>
);
