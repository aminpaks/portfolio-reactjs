import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyles } from './App.styled';
import { HomePage } from './Pages';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <BrowserRouter>
          <Route exact path="/" component={HomePage} />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
