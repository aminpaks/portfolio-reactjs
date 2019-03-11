import React, { FC } from 'react';

import { Typography } from 'src/UI-Kits';
import { StyledDollarSign } from './Price.styled';

export const Price: FC<{ price?: string }> = ({ price = '99' }) => (
  <Typography variant="title" style={{ fontSize: '6em', fontWeight: 300 }}>
    <StyledDollarSign>$</StyledDollarSign>
    {price}
  </Typography>
);
