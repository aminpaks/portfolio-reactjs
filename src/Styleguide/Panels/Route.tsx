import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { RouteChildrenProps } from 'react-router';
import { Panels } from './Panels';

export const PanelsRoute: FC<RouteChildrenProps> = ({ match }) => (
  <Route exact path={`${match ? match.url : ''}/panels`} component={Panels} />
);
