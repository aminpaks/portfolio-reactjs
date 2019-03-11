import React from 'react';

import { Typography, Section, Panel, Carousel, Spacing } from 'src/UI-Kits';
import { ServiceList } from './ServiceList';
import { Price } from './Price';

export const PriceListSection = () => (
  <Section backgroundTheme="accent" style={{ textAlign: 'center' }}>
    <header>
      <Typography variant="subheading" style={{ textTransform: 'uppercase' }}>
        Pricing Plans
      </Typography>
      <Spacing margin={['xs', 'sm', '0']}>
        <Typography variant="headline" component="h3">
          Choose Your Plan
        </Typography>
      </Spacing>
      <Spacing margin={['md', 'auto']}>
        <Typography variant="body" style={{ maxWidth: '52rem' }}>
          We offer three different plans that cover the needs of modern startups and businesses. They are provided via
          monthly or annual payments for your convenience.
        </Typography>
      </Spacing>
    </header>

    <Carousel slidesToShow={3} slidePadding="1em">
      <Carousel.Slide>
        <Panel variant="with-top-accent">
          <Typography variant="subheading" colorTheme="primary" text="Basic" />
          <Price price="49" />
          <ServiceList />
        </Panel>
      </Carousel.Slide>
      <Carousel.Slide>
        <Panel variant="with-top-accent" margins="out-standing">
          <Typography variant="subheading" colorTheme="primary" text="Standard" />
          <Price price="79" />
          <ServiceList />
        </Panel>
      </Carousel.Slide>
      <Carousel.Slide>
        <Panel variant="with-top-accent">
          <Typography variant="subheading" colorTheme="primary" text="Premium" />
          <Price price="99" />
          <ServiceList />
        </Panel>
      </Carousel.Slide>
    </Carousel>
  </Section>
);
