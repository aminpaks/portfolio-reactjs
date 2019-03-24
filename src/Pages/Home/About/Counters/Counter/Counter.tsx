import React, { FC, useEffect, useRef, useState } from 'react';
import { Typography } from 'src/UI-Kits';

export interface CountProps {
  initialCount: number;
  limit: number;
  delay: number;
}

export const HomeAboutCounter: FC<CountProps> = props => {
  const [count, setCount] = useState(props.initialCount);

  useInterval(
    () => {
      setCount(count + 1);
    },
    count > props.limit ? null : props.delay,
  );

  return <Typography variant="subheading">{count}</Typography>;
};

function useInterval(callback: () => void, delay: any) {
  const f = () => {};
  const savedCallback = useRef(f);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
