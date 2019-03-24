import React from 'react';
import { HeadTitle } from 'src/+Shared';
import { MainLayout } from 'src/Layout';
import { Section } from 'src/UI-Kits';

import { AboutSection } from './AboutTeam';
import { ExpertiseSection } from './Expertise';
import { HomeMainSection } from './Main';
import { PriceListSection } from './PriceList';

export const HomePage = () => (
  <>
    <HeadTitle title="Home" />
    <MainLayout>
      <HomeMainSection />
      <ExpertiseSection />
      <AboutSection />
      <Section backgroundTheme="light-gray">Placeholder</Section>
      <PriceListSection />
      <Section>Placeholder</Section>
    </MainLayout>
  </>
);

export default HomePage;
