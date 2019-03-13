import React from 'react';

// Layout should be absolute path
import { MainLayout } from '../../Layout/Main';
import { HeadTitle } from 'src/+Shared';
import { Card } from './Card/Card';
import { MainSection } from './MainSection/SectionMain';
import { ServicesSection } from './Services';
import { AboutSection } from './AboutTeam';
import { PriceListSection } from './PriceList';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const HomePage = () => (
  <>
    <HeadTitle title="Home" />
    <MainLayout>
      <MainSection />
      <ServicesSection />
      <AboutSection />
      <Card {...{ borderColor: getRandomColor() }}>section 3</Card>
      <PriceListSection />
      <Card {...{ borderColor: getRandomColor() }}>section 4</Card>
      <Card {...{ borderColor: getRandomColor() }}>section 5</Card>
      <Card {...{ borderColor: getRandomColor() }}>section 6</Card>
      <Card {...{ borderColor: getRandomColor() }}>section 7</Card>
      <Card {...{ borderColor: getRandomColor() }}>section 8</Card>
      <Card {...{ borderColor: getRandomColor() }}>section 9</Card>
    </MainLayout>
  </>
);

export default HomePage;
