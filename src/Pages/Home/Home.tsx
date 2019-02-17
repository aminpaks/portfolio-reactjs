import React from 'react';

// LAyout should be absolute path
import { MainLayout } from '../../Layout/Main';
import { MainSection } from '../../Layout/Section';
import { HeadTitle } from '../+Shared/HeadTitle';
import { HomePageSectionMain } from './SectionMain';
import { Card } from './Card/Card';

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
      <Card {...{ backgroundColor: getRandomColor() }}>
        <MainSection>
          <HomePageSectionMain />
        </MainSection>
      </Card>
      <Card {...{ backgroundColor: getRandomColor() }}>section 2</Card>
      <Card {...{ backgroundColor: getRandomColor() }}>section 3</Card>
      <Card {...{ backgroundColor: getRandomColor() }}>section 4</Card>
      <Card {...{ backgroundColor: getRandomColor() }}>section 5</Card>
      <Card {...{ backgroundColor: getRandomColor() }}>section 6</Card>
      <Card {...{ backgroundColor: getRandomColor() }}>section 7</Card>
      <Card {...{ backgroundColor: getRandomColor() }}>section 8</Card>
      <Card {...{ backgroundColor: getRandomColor() }}>section 9</Card>
    </MainLayout>
  </>
);

export default HomePage;
