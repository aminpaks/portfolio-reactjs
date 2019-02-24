import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { RouteChildrenProps } from 'react-router';
import { Typographies } from './Typographies';

export const TypographiesRoute: FC<RouteChildrenProps> = ({ match }) => (
  <Route exact path={`${match ? match.url : ''}/typography`} component={Typographies} />
);
