import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    display: flex;
    flex: 1 0 100%;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  a {
    color: #61dafb;
  }

  b {
    font-weight: 700;
  }

  #root {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
  }

  code {
    pre {
      display: block;
      overflow: auto;
      margin-top: 1em;
      margin-bottom: 0;
      padding: 0.4em 0 1.6em;
    }
  }
`;

export const StyledContainer = styled.div`
  text-align: center;
`;

export const StyledLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
`;

export const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
