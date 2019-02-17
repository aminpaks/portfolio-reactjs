import React from 'react';
import { Link } from 'react-router-dom';

export const DefaultNavLinks = () => (
  <>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/styleguide">Styleguide</Link>
  </>
);
