import React from 'react';
import { Panel } from 'src/UI-Kits';

import { Count } from './Count/Count';
import { CounterWrapper, StyledCounter } from './Counter.styled';

export function Counter() {
  return (
    <Panel variant="overlay-bottom">
      <CounterWrapper>
        <StyledCounter>
          <div>
            <Count initialCount={10} limit={34} delay={50} /> Apps <br /> Developed
          </div>
          <div>
            <Count initialCount={1000} limit={1399} delay={2} /> Lines <br /> of code
          </div>
          <div>
            <Count initialCount={0} limit={11} delay={100} /> Awards <br /> Won
          </div>
        </StyledCounter>
      </CounterWrapper>
    </Panel>
  );
}
