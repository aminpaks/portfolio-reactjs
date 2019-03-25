import React, { FC } from 'react';
import styled from 'src/Theme';

const StyledLogo = styled.span`
  width: 5rem;
  position: relative;
  margin-top: -0.379rem;
  margin-bottom: -0.379rem;
  margin-right: 2rem;

  &,
  svg {
    display: block;
  }
  svg {
    user-select: none;
    pointer-events: none;
  }
  path {
    fill: #fff;
  }
`;

export const Logo: FC = () => (
  <StyledLogo>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 199.8 93.3" preserveAspectRatio="xMidYMin slice">
      <g>
        <path
          className="fill-white"
          d="M112.2,93.3H104c-12.2,0-22.1-9.9-22.1-22.1V22.1c0-5.9-4.8-10.7-10.7-10.7H22.1c-5.9,0-10.7,4.8-10.7,10.7v49.2
		c0,5.9,4.8,10.7,10.7,10.7h24.6c5.9,0,10.7-4.8,10.7-10.7v-41c0-3.1,2.5-5.7,5.7-5.7c3.1,0,5.7,2.5,5.7,5.7v41
		c0,12.2-9.9,22.1-22.1,22.1H22.1C9.9,93.3,0,83.4,0,71.2V22.1C0,9.9,9.9,0,22.1,0h49.2c12.2,0,22.1,9.9,22.1,22.1v49.2
		c0,5.9,4.8,10.7,10.7,10.7h8.2c3.1,0,5.7,2.5,5.7,5.7S115.3,93.3,112.2,93.3z"
        />
        <path
          className="fill-white"
          d="M177.8,93.3h-24.6c-12.2,0-22.1-9.9-22.1-22.1v-41c0-3.1,2.5-5.7,5.7-5.7c3.1,0,5.7,2.5,5.7,5.7v41
		c0,5.9,4.8,10.7,10.7,10.7h24.6c5.9,0,10.7-4.8,10.7-10.7V22.1c0-5.9-4.8-10.7-10.7-10.7h-49.2c-5.9,0-10.7,4.8-10.7,10.7v39.6
		c0,3.1-2.5,5.7-5.7,5.7s-5.7-2.5-5.7-5.7V22.1c0,0,0,0,0,0c0-12.2,9.9-22.1,22.1-22.1h49.2c12.2,0,22.1,9.9,22.1,22.1v49.2
		C199.8,83.4,189.9,93.3,177.8,93.3z"
        />
      </g>
    </svg>
  </StyledLogo>
);
