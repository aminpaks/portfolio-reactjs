import WebFont from 'webfontloader';
import React, { Suspense } from 'react';
import { HashRouter, Redirect, Switch } from 'react-router-dom';

import { Loading } from './+Shared';
import { GlobalStyles } from './App.styled';
import { HomePageRoute } from './Pages';
import { StyleguidePageRoute } from './Styleguide';
import { ThemeProvider } from './Theme';

WebFont.load({
  google: {
    families: ['Open Sans:400,600,700'],
  },
});

const App = () => (
  <ThemeProvider>
    <>
      <GlobalStyles />
      <HashRouter basename="/">
        <Suspense fallback={<Loading />}>
          <Switch>{[HomePageRoute, StyleguidePageRoute, <Redirect key="redirect-to-home" to="/" />]}</Switch>
        </Suspense>
      </HashRouter>
    </>
  </ThemeProvider>
);

export default App;
