import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { StyledNavContainer } from './Nav.styled';

export const Navigation: FC = () => (
  <StyledNavContainer>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/styleguide">Styleguide</Link>
  </StyledNavContainer>
);
