import { Children, cloneElement, FC, ReactElement, useCallback, useEffect, useState, useMemo, ReactNode } from 'react';
import { useGetBreakpointWidth, ViewBreakpoint, ViewBreakpointSetting } from 'src/Theme';

export type MQuery = [ViewBreakpoint, ViewBreakpointSetting];

export interface MediaQueryProps {
  queries: MQuery[];
  render?: (queryResults: (boolean | null)[]) => ReactElement<any>;
}

const useGetBreakpointQuery = (query: MQuery) => {
  const breakpoint = useGetBreakpointWidth(query[0], query[1]);
  return `(${query[1]}: ${breakpoint}px)`;
};

const useQueryMediaList = (query: MQuery) => {
  // Media query as string
  const queryAsString = useGetBreakpointQuery(query);

  // Current query matches or not
  const [isMatched, setIsMatched] = useState<boolean | null>(null);

  // We keep the same reference as its signature never changes
  const callback = useCallback(({ matches }) => setIsMatched(matches), []);

  useEffect(() => {
    const match = window.matchMedia(queryAsString);
    match.addListener(callback);

    // Update the current value
    setIsMatched(match.matches);

    // Clean up
    return () => {
      match.removeListener(callback);
    };
  }, query);

  return isMatched;
};

export const MediaQuery: FC<MediaQueryProps> = ({ queries, children, render }) => {
  const queryResults = queries.map(query => useQueryMediaList(query));

  if (typeof render === 'function') {
    return render(queryResults);
  }

  const child = Children.only(children) as ReactElement<any>;
  if (child && typeof child.type === 'function') {
    return cloneElement(child, { mediaQueries: queries, mediaQueryResults: queryResults });
  }

  return child;
};
