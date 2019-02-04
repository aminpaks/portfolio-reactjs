import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Navigation: FC = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>
);
