import React from 'react';

// LAyout should be absolute path
import { MainLayout } from '../../Layout/Main';
import { MainSection } from '../../Layout/Section';
import { HeadTitle } from '../+Shared/HeadTitle';
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
