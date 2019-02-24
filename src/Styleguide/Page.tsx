import React, { FC } from 'react';
import { RouteChildrenProps } from 'react-router';
import { ButtonRoute } from './Buttons';
import { MainLayout } from '../Layout';
import { GridSystemRoute } from './GridSystem';
import { TypographiesRoute } from './Typographies';

export const StyleGuide: FC<RouteChildrenProps> = (props) => {
  const { match, history, location } = props;

  // Redirect from /styleguide to /styleguide/buttons temporarily
  if (match && match.url === location.pathname) {
    history.push(`${match ? match.url : ''}/buttons`);
  }
  return (
    <MainLayout>
      <ButtonRoute {...props} />
      <GridSystemRoute {...props} />
      <TypographiesRoute {...props} />
    </MainLayout>
  );
};
