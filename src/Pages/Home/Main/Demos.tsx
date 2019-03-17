import React from 'react';
import { Carousel } from 'src/UI-Kits';

import { StyledDemoContainer } from './Demos.styled';

export const UIDemos = () => {
  return (
    <StyledDemoContainer>
      <img
        className="iphone-frame"
        srcSet="https://res.cloudinary.com/aminpaks/image/upload/w_640,c_scale/v1552842788/iphone-frame.png 640w,https://res.cloudinary.com/aminpaks/image/upload/w_800,c_scale/v1552842788/iphone-frame.png 800w,https://res.cloudinary.com/aminpaks/image/upload/w_1200,c_scale/v1552842788/iphone-frame.png 1200w,https://res.cloudinary.com/aminpaks/image/upload/w_2400,c_scale/v1552842788/iphone-frame.png 2400w"
        src="https://res.cloudinary.com/aminpaks/image/upload/v1552842788/iphone-frame.png"
      />
      <div className="frames">
        <Carousel autoplay arrows={false} autoplaySpeed={5000}>
          <Carousel.Slide>
            <img
              alt="application photo #1"
              srcSet="https://res.cloudinary.com/aminpaks/image/upload/w_640,c_scale/v1552843077/app-00.jpg 640w,https://res.cloudinary.com/aminpaks/image/upload/w_800,c_scale/v1552843077/app-00.jpg 800w,https://res.cloudinary.com/aminpaks/image/upload/w_1100,c_scale/v1552843077/app-00.jpg 1100w"
              src="https://res.cloudinary.com/aminpaks/image/upload/v1552843077/app-00.jpg"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              alt="application photo #2"
              srcSet="https://res.cloudinary.com/aminpaks/image/upload/w_640,c_scale/v1552840831/app-01.jpg 640w,https://res.cloudinary.com/aminpaks/image/upload/w_800,c_scale/v1552840831/app-01.jpg 800w,https://res.cloudinary.com/aminpaks/image/upload/w_1100,c_scale/v1552840831/app-01.jpg 1100w"
              src="https://res.cloudinary.com/aminpaks/image/upload/v1552840831/app-01.jpg"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              alt="application photo #3"
              srcSet="https://res.cloudinary.com/aminpaks/image/upload/w_640,c_scale/v1552810472/app-02.jpg 640w,https://res.cloudinary.com/aminpaks/image/upload/w_800,c_scale/v1552810472/app-02.jpg 800w,https://res.cloudinary.com/aminpaks/image/upload/w_1100,c_scale/v1552810472/app-02.jpg 1100w"
              src="https://res.cloudinary.com/aminpaks/image/upload/v1552810472/app-02.jpg"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              alt="application photo #4"
              srcSet="https://res.cloudinary.com/aminpaks/image/upload/w_640,c_scale/v1552843767/app-03.jpg 640w,https://res.cloudinary.com/aminpaks/image/upload/w_800,c_scale/v1552843767/app-03.jpg 800w,https://res.cloudinary.com/aminpaks/image/upload/w_1100,c_scale/v1552843767/app-03.jpg 1100w"
              src="https://res.cloudinary.com/aminpaks/image/upload/v1552843767/app-03.jpg"
            />
          </Carousel.Slide>
        </Carousel>
      </div>
    </StyledDemoContainer>
  );
};
