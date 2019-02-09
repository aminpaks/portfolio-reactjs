import React, { Suspense, Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { GlobalStyles } from './App.styled';
import { HomePageRoute } from './Pages';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <BrowserRouter>
          <Suspense fallback={<div>Loading</div>}>
            <Switch>
              <HomePageRoute />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
