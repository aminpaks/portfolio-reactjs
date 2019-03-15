import WebFont from 'webfontloader';
import React, { Suspense } from 'react';
import { HashRouter, Switch, Redirect } from 'react-router-dom';

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
        <Suspense fallback={<div>Loading</div>}>
          <Switch>{[HomePageRoute, StyleguidePageRoute, <Redirect key="redirect-to-home" to="/" />]}</Switch>
        </Suspense>
      </HashRouter>
    </>
  </ThemeProvider>
);

export default App;
