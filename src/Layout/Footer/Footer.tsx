import React, { FC } from 'react';
import { Section } from 'src/UI-Kits';

export const Footer: FC = () => (
  <Section variant="right-round" backgroundTheme="accent">
    <div style={{ textAlign: 'center', padding: 'auto 10em' }}>
      <p>&copy; 2019 Amin Paks</p>
      <p>
        Images provided by{' '}
        <a href="https://pixabay.com" rel="noopener nofollow" target="_blank">
          Pixabay
        </a>
      </p>
    </div>
  </Section>
);
