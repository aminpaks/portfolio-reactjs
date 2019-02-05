import React from 'react';

// TODO: Should be absolute path since outside of future lazy load HOME page
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
