import React, { FC } from 'react';
import { Section, Spacing, Typography } from 'src/UI-Kits';

import { Typewriter } from './Typewriter';

export const HomeAboutSection: FC = () => {
  return (
    <Section backgroundTheme="accent" style={{ textAlign: 'center' }}>
      <Typography variant="subheading" component="h2" text="What tools am I" style={{ textTransform: 'uppercase' }} />
      <Typewriter
        prefix="Skilled in"
        textSeries={[
          'JavaScript',
          'TypeScript',
          'React',
          'Angular',
          'Jest',
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

      <Spacing margin={['sm', 'auto', 'auto']}>
        <Typography variant="body" style={{ maxWidth: '48em' }}>
          Over the years that I've been working and building user interfaces I acquired a set of skills and learnt while
          working with different tools. Reacting programming is one of the most fascinating/useful topics that is very
          underrated in Frontend.
        </Typography>
      </Spacing>

      <Spacing margin={['sm', 'auto', 'auto']}>
        <Typography variant="body" style={{ maxWidth: '48em' }}>
          In my opinion <mark>React</mark> has adopted reactive programming with a different approach and quite honestly
          not many developers realize this fact.
        </Typography>
      </Spacing>
    </Section>
  );
};
