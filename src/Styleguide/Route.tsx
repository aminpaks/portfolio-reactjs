import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const StyleguidePage = lazy(() => import('./Page'));
export const renderStyleguidePage = (props: any) => <StyleguidePage {...props} />;
export const StyleguidePageRoute = <Route key="styleguide" path="/styleguide" render={renderStyleguidePage} />;
