import React, { FC } from 'react';
import { RouteChildrenProps } from 'react-router';
import { ButtonRoute } from './Buttons';
import { MainLayout, MainSection } from '../Pages/+Shared';

export const StyleGuide: FC<RouteChildrenProps> = props => {
  const { match, history, location } = props;

  // Redirect from /styleguide to /styleguide/buttons temporarily
  if (match && match.url === location.pathname) {
    history.push(`${match ? match.url : ''}/buttons`);
  }
  return (
    <MainLayout>
      <MainSection>
        <ButtonRoute {...props} />
      </MainSection>
    </MainLayout>
  );
};
