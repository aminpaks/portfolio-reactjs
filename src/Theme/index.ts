import { Context } from 'react';
import { ThemeContext as StyledThemeContext } from 'styled-components';

import { styled } from './Theme';
import { Theme } from './types';
export * from './Theme';
export * from './types';
export * from './Utils';

// I kept this here as TSX doesn't allow for type assertion
export const ThemeContext: Context<Theme> = StyledThemeContext;

export default styled;
