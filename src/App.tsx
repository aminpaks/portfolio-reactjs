import React, { Suspense, Component } from 'react';
import WebFont from 'webfontloader';
import { HashRouter, Route } from 'react-router-dom';

import { GlobalStyles } from './App.styled';
import { HomePageRoute } from './Pages';
import { StyleguidePageRoute } from './Styleguide';
import { ThemeProvider } from './Theme';

WebFont.load({
  google: {
    families: ['Open Sans:400,600,700'],
  },
});

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <>
          <GlobalStyles />
          <HashRouter basename="/">
            <Suspense fallback={<div>Loading</div>}>
              <HomePageRoute />
              <StyleguidePageRoute />
            </Suspense>
          </HashRouter>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
