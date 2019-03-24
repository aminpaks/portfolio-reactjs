import React, { FC } from 'react';
import { Section, Spacing, Typography } from 'src/UI-Kits';

import { Counter } from './Counter';
import { Typewriter } from './Typewriter';

export const HomeAboutSection: FC = () => {
  return (
    <Section backgroundTheme="accent" style={{ height: '400px', textAlign: 'center' }}>
      <Typography variant="subheading" component="h2" text="What are" style={{ textTransform: 'uppercase' }} />
      <Typewriter
        prefix="best"
        textSeries={['Responsive website', 'Creative website', 'Financial app', 'Quality UI/UX']}
      />

      <Spacing margin={['sm', 'auto']}>
        <Typography variant="body" style={{ maxWidth: '48em' }}>
          We help users all over the world to improve their business by using better software. Since we founded we have
          been delivering the best apps for you.
        </Typography>
      </Spacing>
      <Counter />
    </Section>
  );
};
