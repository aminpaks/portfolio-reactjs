import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const HomePage = lazy(() => import('./Home'));
export const renderHomePage = (props: any) => <HomePage {...props} />;
export const HomePageRoute = () => <Route exact path="/" render={renderHomePage} />;
