import React, { FC } from 'react';
import { keyframes } from 'styled-components';

import styled from 'src/Theme';

const sharpMovementKeyframes = keyframes`
0% { transform: translate(-20px, 0); }
1% { transform: translate(11px, -11px); }
32% { transform: translate(15px, -15px); }
33% { transform: translate(20px, 5px); }
65% { transform: translate(5px, 11px); }
66% { transform: translate(-16px, 5px); }
100% { transform: translate(-20px, 0); }
`;

const StyleBackground = styled.span`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  animation: 20s linear infinite ${sharpMovementKeyframes};

  &,
  svg {
    display: block;
  }
`;

export const Background: FC<{ color?: string }> = ({ color = '#000' }) => (
  <StyleBackground>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 200 200" xmlSpace="preserve">
      <path
        d="M46,24.4C31,47,12.2,90,4.7,116.6c-17.8,63.3,18.4,77.6,57.6,79.8c28,1.5,55.9,0.7,82.5-3.5c42.3-6.7,60.4-20.6,42.2-75.4 c-9.2-27.7-34.3-72-64.1-98.9C99.8-2.4,70.1-11.8,46,24.4z"
        style={{ fill: color, fillOpacity: 0.12 }}
      />
    </svg>
  </StyleBackground>
);
