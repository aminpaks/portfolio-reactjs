import React, { FC } from 'react';

import { Section, Typography, Carousel, Spacing } from 'src/UI-Kits';
import { ServiceItem } from './ServiceItem';
import { IconResponsive, IconMobileApp, IconPerformance, IconTesting } from './Icons';
import { MediaQuery } from 'src/+Shared';

export const ServicesSection: FC = () => (
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
            <ServiceItem
              icon={IconResponsive}
              headline="Responsive Design"
              text="Building responsive web applications is easy if you know how it's done."
            />
          </Carousel.Slide>

          <Carousel.Slide>
            <ServiceItem
              icon={IconMobileApp}
              headline="Native Applications"
              text="Building PWA is hot nowadays but React Native gives you the advantage to build once run everywhere!"
            />
          </Carousel.Slide>

          <Carousel.Slide>
            <ServiceItem
              icon={IconPerformance}
              headline="Performance Audits"
              text="Premature performance optimization is not a good idea, optimize when it's time."
            />
          </Carousel.Slide>

          <Carousel.Slide>
            <ServiceItem
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
