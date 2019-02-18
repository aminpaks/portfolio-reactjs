import React, { Suspense, Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyles } from './App.styled';
import { HomePageRoute } from './Pages';
import { StyleGuide } from './Styleguide';
import { ThemeProvider } from './Theme';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <ThemeProvider>
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
