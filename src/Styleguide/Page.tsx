import React, { FC } from 'react';
import { RouteChildrenProps, Redirect } from 'react-router';

import { Layout } from './+Layout';
import { ButtonsRoute } from './Buttons';
import { CarouselsRoute } from './Carousels';
import { GridSystemRoute } from './GridSystem';
import { PanelsRoute } from './Panels';
import { SectionsRoute } from './Sections';
import { SpacingsRoute } from './Spacings';
import { TabsRoute } from './Tabs';
import { TypographiesRoute } from './Typographies';

const reTrailingSlash = /\/$/;
const routes = [
  { title: '<< Exit StyleGuide >>', url: '../' },
  { title: 'Buttons', url: './buttons' },
  { title: 'Carousels', url: './carousels' },
  { title: 'Grid System', url: './grid-system' },
  { title: 'Panels', url: './panels' },
  { title: 'Sections', url: './sections' },
  { title: 'Spacing', url: './spacings' },
  { title: 'Tabs', url: './tabs' },
  { title: 'Typographies', url: './typographies' },
];
const isValidRoute = (currentRoute: string) =>
  routes.some(route => {
    const routeEnding = route.url.split('/').pop()!;
    return routeEnding ? currentRoute.endsWith(routeEnding) : false;
  }) === false;

export const StyleguidePage: FC<RouteChildrenProps> = props => {
  const { location } = props;
  const currentUrl = location.pathname.replace(reTrailingSlash, '');
  const shouldRedirect = isValidRoute(currentUrl);

  return (
    <Layout navItems={routes}>
      {shouldRedirect && <Redirect to="/styleguide/buttons" />}
      <ButtonsRoute {...props} />
      <CarouselsRoute {...props} />
      <GridSystemRoute {...props} />
      <TypographiesRoute {...props} />
      <PanelsRoute {...props} />
      <SectionsRoute {...props} />
      <SpacingsRoute {...props} />
      <TabsRoute {...props} />
    </Layout>
  );
};

export default StyleguidePage;
