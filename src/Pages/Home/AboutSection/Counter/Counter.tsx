import React, { useState, useEffect } from 'react';
import { StyledCounter, CounterWrapper } from './Counter.styled';
import { Count } from './Count/Count';

export function Counter() {
  return (
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
  );
}
