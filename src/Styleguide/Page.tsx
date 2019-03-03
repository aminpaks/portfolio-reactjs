import React, { FC } from 'react';
import { RouteChildrenProps } from 'react-router';

import { MainLayout } from '../Layout';
import { ButtonsRoute } from './Buttons';
import { GridSystemRoute } from './GridSystem';
import { PanelsRoute } from './Panels';
import { SectionsRoute } from './Sections';
import { TabsRoute } from './Tabs';
import { TypographiesRoute } from './Typographies';

export const StyleGuide: FC<RouteChildrenProps> = (props) => {
  const { match, history, location } = props;

  // Redirect from /styleguide to /styleguide/buttons temporarily
  if (match && match.url === location.pathname) {
    history.push(`${match ? match.url : ''}/buttons`);
  }
  return (
    <MainLayout>
      <ButtonsRoute {...props} />
      <GridSystemRoute {...props} />
      <PanelsRoute {...props} />
      <SectionsRoute {...props} />
      <TabsRoute {...props} />
      <TypographiesRoute {...props} />
    </MainLayout>
  );
};
