import { useContext } from 'react';
import { ViewBreakpoint, ViewBreakpointSetting, ThemeContext } from 'src/Theme';

const allBreakpoints: ViewBreakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const reMAX = /^max/i;

export const useGetBreakpointWidth = (breakpoint: ViewBreakpoint, setting?: ViewBreakpointSetting) => {
  const { breakpoints } = useContext(ThemeContext);
  const isMax = reMAX.test(setting || 'min-width');
  let width = breakpoints[breakpoint];

  if (isMax) {
    const nextBreakpointIndex = allBreakpoints.indexOf(breakpoint) + 1;
    width = breakpoints[allBreakpoints[nextBreakpointIndex]] || 9999999;
  }

  return width;
};
