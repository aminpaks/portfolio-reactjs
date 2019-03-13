import React, { useState, useEffect, useRef, FC } from 'react';

export interface CountProps {
  initialCount: number;
  limit: number;
  delay: number;
}

export function Count(props: CountProps) {
  const [count, setCount] = useState(props.initialCount);

  useInterval(
    () => {
      setCount(count + 1);
    },
    count > props.limit ? null : props.delay,
  );

  return <span>{count}</span>;
}

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
