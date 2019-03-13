import React from 'react';

// Layout should be absolute path
import { Section } from 'src/UI-Kits';
import { HeadTitle } from 'src/+Shared';
import { MainLayout } from 'src/Layout';
import { MainSection } from './MainSection/SectionMain';
import { ServicesSection } from './Services';
import { AboutSection } from './AboutTeam';
import { PriceListSection } from './PriceList';

export const HomePage = () => (
  <>
    <HeadTitle title="Home" />
    <MainLayout>
      <MainSection />
      <ServicesSection />
      <AboutSection />
      <Section>Placeholder</Section>
      <PriceListSection />
      <Section>Placeholder</Section>
    </MainLayout>
  </>
);

export default HomePage;
