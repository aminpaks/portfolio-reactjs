import React, { FC } from 'react';
import { Typography, Spacing } from 'src/UI-Kits';

import { useTypewriter } from './Hooks';
import { StyledTypewriterContainer } from './Typewriter.styled';

export interface TypewriterProps {
  prefix?: string;
  textSeries: string[];
}

export const Typewriter: FC<TypewriterProps> = ({ prefix = '', textSeries }) => {
  const text = useTypewriter(textSeries);

  return (
    <StyledTypewriterContainer>
      <Spacing margin={['xs', 'auto', 'auto']}>
        <Typography variant="headline" component="h2" style={{ textTransform: 'capitalize' }}>
          {prefix ? prefix + ' ' : null}
          <span>{text}</span>
          <b />
        </Typography>
      </Spacing>
    </StyledTypewriterContainer>
  );
};
