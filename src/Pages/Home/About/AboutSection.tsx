import React, { FC } from 'react';
import { Section, Spacing, Typography } from 'src/UI-Kits';

import { HomeAboutCounters } from './Counters';
import { Typewriter } from './Typewriter';

export const HomeAboutSection: FC = () => {
  return (
    <Section backgroundTheme="accent" style={{ textAlign: 'center' }}>
      <Typography variant="subheading" component="h2" text="What tools am I" style={{ textTransform: 'uppercase' }} />
      <Typewriter
        prefix="Skilled in"
        textSeries={[
          'HTML',
          'CSS',
          'JavaScript',
          'TypeScript',
          'React',
          'Angular',
          'Webpack',
          'Node.js',
          'Redux',
          'RXJS',
          'ReasonML',
          'D3.js',
          'Git (Version control)',
          'Cypress',
        ]}
      />

      <Spacing margin={['sm', 'auto', 'md']}>
        <Typography variant="body" style={{ maxWidth: '48em' }}>
          Over the years that I've been working and building user interfaces I acquired a set of skills and learnt
          working with different tools. Reacting programming is one of the most enjoyable/useful topics that in my
          opinion is very underrated in Frontend. In my opinion <strong>React</strong> has adopted reactive programming
          with a different approach and quite honestly not many developers realize this fact.
        </Typography>
      </Spacing>

      <HomeAboutCounters />
    </Section>
  );
};
