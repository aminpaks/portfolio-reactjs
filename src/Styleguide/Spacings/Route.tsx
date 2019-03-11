import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { RouteChildrenProps } from 'react-router';
import { Spacings } from './Spacings';

export const SpacingsRoute: FC<RouteChildrenProps> = ({ match }) => (
  <Route exact path={`${match ? match.url : ''}/spacings`} component={Spacings} />
);
