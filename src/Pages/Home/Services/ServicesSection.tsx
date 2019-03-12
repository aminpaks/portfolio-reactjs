import React, { FC } from 'react';

import { Section, Typography, Carousel, Spacing } from 'src/UI-Kits';
import { ServiceItem } from './ServiceItem';
import { IconResponsive, IconMobileApp, IconPerformance, IconTesting } from './Icons';

export const ServicesSection: FC = () => (
  <Section style={{ textAlign: 'center' }}>
    <Typography
      variant="subheading"
      colorTheme="primary"
      component="h2"
      text="What we do"
      style={{ textTransform: 'uppercase' }}
    />
    <Spacing margin={['xs', 'md', 'lg']}>
      <Typography variant="headline" component="h3" text="Our services" style={{ textTransform: 'capitalize' }} />
    </Spacing>

    <Carousel slidesToShow={4} slidePadding="1em">
      <Carousel.Slide>
        <ServiceItem
          icon={IconResponsive}
          headline="Responsive Design"
          text="Our company develops multipurpose responsive applications for all platforms."
        />
      </Carousel.Slide>

      <Carousel.Slide>
        <ServiceItem
          icon={IconMobileApp}
          headline="Mobile Applications"
          text="Our mobile apps are highly rated by media and our users all over the world."
        />
      </Carousel.Slide>

      <Carousel.Slide>
        <ServiceItem
          icon={IconPerformance}
          headline="Performance"
          text="We also provide our customers with quality cloud development solutions."
        />
      </Carousel.Slide>

      <Carousel.Slide>
        <ServiceItem
          icon={IconTesting}
          headline="Automation"
          text="We guarantee the best practices in our automation/integration testing solutions."
        />
      </Carousel.Slide>
    </Carousel>
  </Section>
);
