import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { RouteChildrenProps } from 'react-router';
import { Tabs } from './Tabs';

export const TabsRoute: FC<RouteChildrenProps> = ({ match }) => (
  <Route exact path={`${match ? match.url : ''}/tabs`} component={Tabs} />
);
