const breakpoint = {
  phoneOnly: '599px',
  tabletPortraitUp: '600px',
  tabletLandscapeUp: '900px',
  desktopUp: '1200px',
  bigDesktopUp: '1800px',
};

export const device = {
  phoneOnly: `(max-width: ${breakpoint.phoneOnly})`,
  tabletPortraitUp: `(min-width: ${breakpoint.tabletPortraitUp})`,
  tabletLandscapeUp: `(min-width: ${breakpoint.tabletLandscapeUp})`,
  desktopUp: `(min-width: ${breakpoint.desktopUp})`,
  bigDesktopUp: `(min-width: ${breakpoint.bigDesktopUp})`,
};
