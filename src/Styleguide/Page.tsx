import React, { FC } from 'react';
import { RouteChildrenProps } from 'react-router';

import { Layout, LayoutSection } from './+Layout';
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
    <Layout
      navItems={[
        { title: '<< Exit StyleGuide >>', url: '../' },
        { title: 'Buttons', url: './buttons' },
        { title: 'Grid System', url: './grid-system' },
        { title: 'Panels', url: './panels' },
        { title: 'Tabs', url: './tabs' },
        { title: 'Typographies', url: './typographies' },
      ]}
    >
      <LayoutSection>
        <ButtonsRoute {...props} />
        <GridSystemRoute {...props} />
        <TypographiesRoute {...props} />
        <PanelsRoute {...props} />
        <SectionsRoute {...props} />
        <TabsRoute {...props} />
      </LayoutSection>
    </Layout>
  );
};
