import React from 'react';

import { Typography, Section } from 'src/UI-Kits';

export const PriceListSection = () => (
  <Section backgroundTheme="accent" style={{ textAlign: 'center' }}>
    <Typography variant="subheading" style={{ textTransform: 'uppercase' }}>
      Pricing Plans
    </Typography>
  </Section>
);
