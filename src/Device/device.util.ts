import { breakpoints } from './breakpoints';

export const mediaQuery = {
  phoneOnly: `@media (max-width: ${breakpoints.phoneOnly})`,
  tabletPortraitUp: `@media (min-width: ${breakpoints.tabletPortraitUp})`,
  tabletLandscapeUp: `@media (min-width: ${breakpoints.tabletLandscapeUp})`,
  desktopUp: `@media (min-width: ${breakpoints.desktopUp})`,
  bigDesktopUp: `@media (min-width: ${breakpoints.bigDesktopUp})`,
};
