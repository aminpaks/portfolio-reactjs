import { breakpoints } from './breakpoints';

export const mediaQuery = {
  phoneOnly: `@media (max-width: ${breakpoints.phoneOnly}px)`,
  tabletPortraitMin: `@media (min-width: ${breakpoints.tabletPortrait}px)`,
  tabletPortraitMax: `@media (max-width: ${breakpoints.tabletPortrait - 1}px)`,
  tabletLandscapeMin: `@media (min-width: ${breakpoints.tabletLandscape}px)`,
  desktopMin: `@media (min-width: ${breakpoints.desktop}px)`,
  bigDesktopMin: `@media (min-width: ${breakpoints.bigDesktop}px)`,
};
