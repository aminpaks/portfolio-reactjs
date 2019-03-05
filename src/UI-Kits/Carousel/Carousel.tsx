import React, { FC, Children, cloneElement } from 'react';
import Slider, { Settings } from 'react-slick';

import { isChildTypeOf } from '../Utils';
import { CarouselSlide, CarouselSlideProps } from './Slide';
import { StyledCarouselsContainer } from './Carousel.styled';
import { getArrow } from './Arrows.styled';

export interface CarouselProps extends Settings {
  arrowSize?: string;
  slidePadding?: string;
}

export const Carousel: FC<CarouselProps> & { Slide: FC<CarouselSlideProps> } = ({
  children,
  ...props
}) => {
  const { arrowSize, slidePadding, ...rest } = props;
  const updateChildren = Children.map(children, child => {
    if (isChildTypeOf(CarouselSlide, child)) {
      // This is necessary to preserve the customized styling
      return cloneElement(child, { __internalStyle: child.props.style, __internalProps: props });
    }
    return null;
  });

  return (
    <StyledCarouselsContainer {...{ arrowSize, slidePadding, draggable: props.draggable }}>
      <Slider
        draggable={false}
        prevArrow={getArrow('left')}
        nextArrow={getArrow('right')}
        {...rest}
      >
        {updateChildren}
      </Slider>
    </StyledCarouselsContainer>
  );
};

Carousel.Slide = CarouselSlide;
