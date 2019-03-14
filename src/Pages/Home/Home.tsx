import React from 'react';

// Layout should be absolute path
import { Section } from 'src/UI-Kits';
import { HeadTitle } from 'src/+Shared';
import { MainLayout } from 'src/Layout';
import { HomeMainSection } from './Main';
import { ServicesSection } from './Services';
import { AboutSection } from './AboutTeam';
import { PriceListSection } from './PriceList';

export const HomePage = () => (
  <>
    <HeadTitle title="Home" />
    <MainLayout>
      <HomeMainSection />
      <ServicesSection />
      <AboutSection />
      <Section backgroundTheme="light-gray">Placeholder</Section>
      <PriceListSection />
      <Section>Placeholder</Section>
    </MainLayout>
  </>
);

export default HomePage;
