import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import { GlobalStyles, StyledContainer, StyledHeader, StyledLogo } from './App.styled';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <StyledContainer>
          <GlobalStyles />
          <StyledHeader>
            <StyledLogo src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
          </StyledHeader>
        </StyledContainer>
      </BrowserRouter>
    );
  }
}

export default App;
