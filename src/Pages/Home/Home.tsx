import React from 'react';
import { HeadTitle } from 'src/+Shared';
import { MainLayout } from 'src/Layout';
import { Section } from 'src/UI-Kits';

import { HomeAboutSection } from './About';
import { HomeExpertiseSection } from './Expertise';
import { HomeMainSection } from './Main';
import { PriceListSection } from './PriceList';

export const HomePage = () => (
  <>
    <HeadTitle title="Home" />
    <MainLayout>
      <HomeMainSection />
      <HomeExpertiseSection />
      <HomeAboutSection />
      <Section backgroundTheme="light-gray">Placeholder</Section>
      <PriceListSection />
      <Section>Placeholder</Section>
    </MainLayout>
  </>
);

export default HomePage;
