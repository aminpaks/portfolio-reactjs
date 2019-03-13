import React, { FC } from 'react';
import { Panel, Section, Typography, Spacing } from 'src/UI-Kits';

import { Counter } from './Counter';
import { Typewriter } from './Typewriter';
import { StyledAboutSection } from './AboutSection.styled';

export interface AboutSectionProps {
  className?: string;
}

export const AboutSection: FC<AboutSectionProps> = () => {
  return (
    <Section backgroundTheme="accent" style={{ textAlign: 'center' }}>
      <StyledAboutSection>
        <Typography variant="subheading" component="h3" text="About our team" style={{ textTransform: 'uppercase' }} />
        <Typewriter
          prefix="best"
          textSeries={['responsive website', 'creative website', 'financial app', 'quality UI/UX']}
        />
        <Spacing margin={['sm', 'auto']}>
          <Typography variant="body" style={{ maxWidth: '48em' }}>
            We help users all over the world to improve their business by using better software. Since we founded we
            have been delivering the best apps for you.
          </Typography>
        </Spacing>
        <Panel variant="overlay-bottom">
          <Counter />
        </Panel>
      </StyledAboutSection>
    </Section>
  );
};
