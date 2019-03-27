import styled, { createGlobalStyle } from 'styled-components';
import { ThemeProps } from 'src/Theme';

export const GlobalStyles = createGlobalStyle<ThemeProps>`
  html {
    color: ${props => props.theme.colorSet.text};
    font-size: 14px;
    line-height: 1.6;
  }
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
    color: inherit;
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
    text-align: left;

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
