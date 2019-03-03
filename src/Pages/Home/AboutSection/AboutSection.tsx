import React, { FC } from 'react';

import { Panel, Section } from 'src/UI-Kits';
import { Counter } from './Counter/Counter';
import { AboutSectionStyled } from './AboutSection.styled';

export interface AboutSectionProps {
  className?: string;
}

export const AboutSection: FC<AboutSectionProps> = ({ children }) => {
  return (
    <Section backgroundTheme="accent">
      <AboutSectionStyled>
        section about company
        {children}
        <Panel variant="overlay-bottom">
          <Counter />
        </Panel>
      </AboutSectionStyled>
    </Section>
  );
};
