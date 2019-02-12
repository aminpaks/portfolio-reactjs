import { Component, useEffect, FC } from 'react';

interface HeadTitleProps {
  suffix?: string;
  title?: string;
}

export const HeadTitle: FC<HeadTitleProps> = ({ suffix = 'DMotivation', title }) => {
  useEffect(() => {
    const head: HTMLTitleElement | null = document.querySelector('head title');
    if (head) {
      head.textContent = title ? `${title} - ${suffix}` : suffix;
    }
    // Unmount
    return () => {
      if (head) {
        // Next mounted HeadTitle will replace this
        head.textContent = 'Loading...';
      }
    };
  }, []);
  return null;
};
