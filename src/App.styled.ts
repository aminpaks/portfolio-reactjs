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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  a {
    color: #61dafb;
  }

  #root {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
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
