import React, { FC } from 'react';
import { MediaQuery } from 'src/+Shared';
import { Carousel, Section, Spacing, Typography } from 'src/UI-Kits';

import { HomeExpertiseItem } from './ExpertiseItem';
import { IconMobileApp, IconPerformance, IconResponsive, IconTesting } from './Icons';

export const HomeExpertiseSection: FC = () => (
  <Section style={{ textAlign: 'center' }}>
    <Typography
      variant="subheading"
      colorTheme="primary"
      component="h2"
      text="What are"
      style={{ textTransform: 'uppercase' }}
    />
    <Spacing margin={['xs', 'md', 'lg']}>
      <Typography variant="headline" component="h3" text="My expertise" style={{ textTransform: 'capitalize' }} />
    </Spacing>

    <MediaQuery
      queries={[['xs', 'max-width'], ['sm', 'max-width'], ['lg', 'max-width'], ['xl', 'min-width']]}
      render={results => (
        <Carousel slidesToShow={results.findIndex(q => q === true) + 1} slidePadding="1em">
          <Carousel.Slide>
            <HomeExpertiseItem
              icon={IconResponsive}
              headline="Responsive Design"
              text="Building responsive web applications is easy if you know how it's done."
            />
          </Carousel.Slide>

          <Carousel.Slide>
            <HomeExpertiseItem
              icon={IconMobileApp}
              headline="Native Applications"
              text="React Native gives you the advantage to build once run everywhere!"
            />
          </Carousel.Slide>

          <Carousel.Slide>
            <HomeExpertiseItem
              icon={IconPerformance}
              headline="Performance Audits"
              text="Premature performance optimization is not a good idea, optimize when it's time."
            />
          </Carousel.Slide>

          <Carousel.Slide>
            <HomeExpertiseItem
              icon={IconTesting}
              headline="Best Practises"
              text="Keeping up with Frontend stack is a lot of fun if you love what you do!"
            />
          </Carousel.Slide>
        </Carousel>
      )}
    />
  </Section>
);
