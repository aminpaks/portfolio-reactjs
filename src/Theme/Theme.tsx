import React, { FC } from 'react';
import baseStyled, { ThemedStyledInterface, ThemeProvider as StyledThemeProvider } from 'styled-components';

import { Theme } from './types';

export const defaultTheme: Theme = {
  colorSet: {
    text: '#262f3c',
    textInverted: '#fff',

    primary: '#0accbe',
    secondary: '#5f67df',
    tertiary: '#ffea5c',

    gray: '#6c757d',
    grayDark: '#343a40',

    success: '#28a745',
    info: '#17a2b8',
    warning: '#ffc107',
    danger: '#dc3545',
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600,
  },
  tokens: {
    spacing: {
      xs: '0.7143rem',
      sm: '1.2857rem',
      md: '1.85715rem',
      lg: '2.7143rem',
      xl: '3.7143rem',
      xxl: '5.7143rem',
    },
  },
};

export const ThemeProvider: FC = ({ children }) => {
  const onlyChild = React.Children.only(children);

  if (onlyChild == null || !React.isValidElement<any>(onlyChild)) {
    throw new TypeError('You need to pass only one valid component as the children of ThemeProvider');
  }

  return <StyledThemeProvider theme={defaultTheme}>{onlyChild}</StyledThemeProvider>;
};

export const styled = baseStyled as ThemedStyledInterface<Theme>;
