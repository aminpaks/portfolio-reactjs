import React from 'react';
import { Panel, Carousel } from 'src/UI-Kits';

import { HomeAboutCounter } from './Counter';
import { MediaQuery } from 'src/+Shared';

export function HomeAboutCounters() {
  return (
    <Panel variant="overlay-bottom">
      <MediaQuery
        queries={[['xxl', 'min-width']]}
        render={results => (
          <Carousel slidesToShow={results.findIndex(q => q === true) + 3}>
            <Carousel.Slide>
              <HomeAboutCounter initialCount={10} limit={34} delay={50} /> Apps Developed
            </Carousel.Slide>
            <Carousel.Slide>
              <HomeAboutCounter initialCount={1000} limit={1399} delay={2} /> Lines of code
            </Carousel.Slide>
            <Carousel.Slide>
              <HomeAboutCounter initialCount={0} limit={11} delay={100} /> Awards Won
            </Carousel.Slide>
          </Carousel>
        )}
      />
    </Panel>
  );
}
