import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { RouteChildrenProps } from 'react-router';
import { Carousels } from './Carousels';

export const CarouselsRoute: FC<RouteChildrenProps> = ({ match }) => (
  <Route exact path={`${match ? match.url : ''}/carousels`} component={Carousels} />
);
