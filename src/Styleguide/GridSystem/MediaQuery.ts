import { FC, useContext, useEffect, useCallback, Fragment, useState, useRef } from 'react';
import { ThemeContext, ViewBreakpoint } from 'src/Theme';

export const MediaQuery: FC = ({ children = null }) => {
  const { breakpoints } = useContext(ThemeContext);
  const [breakpoint, setBreakpoint] = useState<ViewBreakpoint | null>(null);

  const callback = useCallback(({ target }: Event) => {
    const w = target as Window;
    const windowWidth = w.innerWidth;
    for (const [bName, bWidth] of Object.entries(breakpoints)) {
      if (bWidth > windowWidth) {
        return setBreakpoint(bName as ViewBreakpoint);
      }
    }
    setBreakpoint('xxl');
  }, []);

  let isFirstMount = useRef(true);
  useEffect(() => {
    window.addEventListener('resize', callback);
    if (isFirstMount.current) {
      isFirstMount.current = false;
      callback({ target: document.defaultView } as Event);
    }
    return () => window.removeEventListener('resize', callback);
  });

  if (typeof children === 'function') {
    return children(breakpoint);
  }
  return null;
};
