import React, { FC } from 'react';
import { Panel } from 'src/UI-Kits/Panel/Panel.styled';
import { Counter } from './Counter/Counter';
import { Section } from 'src/+Shared';
import { AboutSectionStyled } from './AboutSection.styled';

export interface AboutSectionProps {
  className?: string;
}

export const AboutSection: FC<AboutSectionProps> = ({ children }) => {
  return (
    <AboutSectionStyled>
      <Section variant="fluid">
        section about company
        {children}
        <Panel variant="overlay-bottom">
          <Counter />
        </Panel>
      </Section>
    </AboutSectionStyled>
  );
};
