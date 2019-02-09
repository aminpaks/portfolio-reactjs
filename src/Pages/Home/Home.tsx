import React from 'react';

import { MainLayout } from '../+Shared/Layout/Main';
import { HeadTitle } from '../+Shared/HeadTitle';
import { MainSection } from '../+Shared/Layout/Section';
import { HomePageSectionMain } from './SectionMain';

export const HomePage = () => (
  <>
    <HeadTitle title="Home" />
    <MainLayout>
      <MainSection>
        <HomePageSectionMain />
      </MainSection>
    </MainLayout>
  </>
);

export default HomePage;
