import React from 'react';
import { Section, Tab } from 'src/UI-Kits';
import { HeadTitle } from 'src/+Shared';
import { StyledSectionContainer } from './Tabs.styled';

const lorem = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

const getLorem = (prefix: string = '') =>
  prefix +
  '\n' +
  Array(Math.round(Math.random() * 5) + 4)
    .fill(lorem)
    .join(' ');

export const Tabs = () => {
  return (
    <>
      <HeadTitle title="Tabs" suffix="Styleguide" />
      <Section>
        <StyledSectionContainer>
          <Tab
            items={[
              { id: 'c1', title: 'Tab 1', content: getLorem('Tab 1 content') },
              { id: 'c2', title: 'Tab 2', content: getLorem('Tab 2 content') },
              { id: 'c3', title: 'Tab 3', content: getLorem('Tab 3 content') },
              { id: 'c4', title: 'Tab 4', content: getLorem('Tab 4 content') },
            ]}
          />
        </StyledSectionContainer>
      </Section>
    </>
  );
};
