import { FC, CSSProperties, createElement, memo } from 'react';

import { getPropValue } from 'src/Theme';
import { CarouselProps } from '../Carousel';

export interface CarouselSlideProps {
  style?: CSSProperties;
  component?: string;
  __internalStyle?: CSSProperties;
  __internalProps?: CarouselProps;
}

export const CarouselSlide: FC<CarouselSlideProps> = memo(
  ({ style, __internalStyle, __internalProps, component = 'div', children }) => {
    const padding =
      __internalProps == null
        ? undefined
        : getPropValue<CarouselProps>({ prop: 'slidePadding', normalize: 2 })(__internalProps);
    const margin =
      __internalProps == null
        ? undefined
        : getPropValue<CarouselProps>({ prop: 'slidePadding', normalize: -1 })(__internalProps);

    return createElement(
      'div',
      { style },
      createElement(
        'div',
        { style: { padding, margin } },
        createElement(component, { style: __internalStyle }, children),
      ),
    );
  },
);
