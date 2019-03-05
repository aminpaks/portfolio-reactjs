import React, { FC } from 'react';
import { RouteChildrenProps, Redirect } from 'react-router';

import { Layout, LayoutSection } from './+Layout';
import { ButtonsRoute } from './Buttons';
import { CarouselsRoute } from './Carousels';
import { GridSystemRoute } from './GridSystem';
import { PanelsRoute } from './Panels';
import { SectionsRoute } from './Sections';
import { TabsRoute } from './Tabs';
import { TypographiesRoute } from './Typographies';

export const StyleGuide: FC<RouteChildrenProps> = props => {
  const { location } = props;
  const isStyleguideRoot = location.pathname.endsWith('/styleguide');

  return (
    <Layout
      navItems={[
        { title: '<< Exit StyleGuide >>', url: '../' },
        { title: 'Buttons', url: './buttons' },
        { title: 'Carousels', url: './carousels' },
        { title: 'Grid System', url: './grid-system' },
        { title: 'Panels', url: './panels' },
        { title: 'Tabs', url: './tabs' },
        { title: 'Typographies', url: './typographies' },
      ]}
    >
      <LayoutSection>
        {isStyleguideRoot && <Redirect to="/styleguide/buttons" />}
        <ButtonsRoute {...props} />
        <CarouselsRoute {...props} />
        <GridSystemRoute {...props} />
        <TypographiesRoute {...props} />
        <PanelsRoute {...props} />
        <SectionsRoute {...props} />
        <TabsRoute {...props} />
      </LayoutSection>
    </Layout>
  );
};
