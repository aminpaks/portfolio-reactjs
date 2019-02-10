import React, { Suspense, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyles } from './App.styled';
import { ThemeProvider } from 'styled-components';
import { HomePageRoute } from './Pages';
import { StyleGuide } from './Styleguide';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <ThemeProvider theme={{ colorSet: { primary: 'ThemeProvider' } }}>
          <BrowserRouter>
            <Suspense fallback={<div>Loading</div>}>
              <HomePageRoute />
              <Route path="/styleguide" component={StyleGuide} />
            </Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
