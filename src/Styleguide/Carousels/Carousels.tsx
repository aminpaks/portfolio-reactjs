import React, { CSSProperties, useState } from 'react';

import { Carousel, Typography } from 'src/UI-Kits';
import { getRandomColor, getForegroundColor } from 'src/Theme';
import { HeadTitle } from 'src/+Shared';
import { StyledCarouselsContainer as Container } from './Carousels.styled';

const getStandardStyles = (extra?: CSSProperties): CSSProperties => {
  const backgroundColor = getRandomColor();
  const color = getForegroundColor(backgroundColor);
  return {
    ...extra,
    backgroundColor,
    color,
    fontSize: '4em',
    height: '220px',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
  };
};

export const Carousels = () => {
  const [paddingValue, setPaddingValue] = useState(1);
  return (
    <>
      <HeadTitle suffix="Styleguide" title="Carousels" />

      <Container>
        <Typography variant="headline" text="Simple" />
        <Carousel>
          <Carousel.Slide style={getStandardStyles()}>Slide 1</Carousel.Slide>
          <Carousel.Slide style={getStandardStyles()}>Slide 2</Carousel.Slide>
          <Carousel.Slide style={getStandardStyles()}>Slide 3</Carousel.Slide>
        </Carousel>
      </Container>

      <Container>
        <Typography variant="headline" text="Bigger Arrow and 2 Slides & draggable" />
        <Carousel draggable arrowSize="4.8em" slidesToShow={2}>
          <Carousel.Slide style={getStandardStyles()}>Slide 1</Carousel.Slide>
          <Carousel.Slide style={getStandardStyles()}>Slide 2</Carousel.Slide>
          <Carousel.Slide style={getStandardStyles()}>Slide 3</Carousel.Slide>
          <Carousel.Slide style={getStandardStyles()}>Slide 4</Carousel.Slide>
        </Carousel>
      </Container>

      <Container>
        <Typography variant="headline" text="Padding and Shadow for Slides" />
        <label>
          <span>Set padding value: </span>
          <input
            type="number"
            value={paddingValue || '0'}
            onChange={e => setPaddingValue(parseFloat(e.target.value))}
          />
        </label>
        <Carousel slidesToShow={2} slidePadding={`${paddingValue}em`}>
          <Carousel.Slide style={getStandardStyles()}>Slide 1</Carousel.Slide>
          <Carousel.Slide style={getStandardStyles()}>Slide 2</Carousel.Slide>
          <Carousel.Slide style={getStandardStyles()}>Slide 3</Carousel.Slide>
          <Carousel.Slide style={getStandardStyles()}>Slide 4</Carousel.Slide>
        </Carousel>
      </Container>
    </>
  );
};
