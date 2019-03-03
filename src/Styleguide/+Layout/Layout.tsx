import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { StyledLayoutContainer } from './Layout.styled';

export const Layout: FC<{ navItems: { title: string; url: string }[] }> = ({
  navItems,
  children,
}) => (
  <StyledLayoutContainer>
    <ul>
      {navItems.map((item) => (
        <li key={item.url}>
          <Link to={item.url}>{item.title}</Link>
        </li>
      ))}
    </ul>
    <div>{children}</div>
  </StyledLayoutContainer>
);
