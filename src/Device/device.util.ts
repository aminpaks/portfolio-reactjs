import { breakpoints } from './breakpoints';

export const mediaQuery = {
  phoneOnly: () => {
    return `@media (max-width: ${breakpoints.phoneOnly})`;
  },
  tabletPortraitUp: () => {
    return `@media (min-width: ${breakpoints.tabletPortraitUp})`;
  },
  tabletLandscapeUp: () => {
    return `@media (min-width: ${breakpoints.tabletLandscapeUp})`;
  },
  desktopUp: () => {
    return `@media (min-width: ${breakpoints.desktopUp})`;
  },
  bigDesktopUp: () => {
    return `@media (min-width: ${breakpoints.bigDesktopUp})`;
  },
};
