import React, { useEffect, useRef } from 'react';
import { TimelineMax, TweenMax } from 'gsap';
import { StyledDemoContainer } from './MainSection.styled';

export const UIDemos = () => {
  const refDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refDiv.current != null) {
      const tween = new TimelineMax({ repeat: -1, paused: true });
      tween
        .fromTo(
          refDiv.current,
          1,
          {
            transform: 'translate(172px, -22px) scale(.86) rotateX(-10deg) rotateY(32deg) rotateZ(-1deg)',
          },
          {
            transform: 'translate(0, -4px) rotateX(-10deg) rotateY(31deg)',
          },
          '+=1',
        )
        .to(
          refDiv.current,
          1,
          {
            transform: 'translate(-231px, 20px) scale(1.2,1.2) rotateX(-9deg) rotateY(40deg)',
          },
          '+=4',
        )
        .play();
    }
    return () => {
      console.log('should clean');
    };
  }, []);
  return (
    <StyledDemoContainer>
      <img
        className="iphone-frame"
        src="https://res.cloudinary.com/aminpaks/image/upload/v1552821454/iphone-frame.png"
      />
      <div className="frames">
        <div ref={refDiv}>
          <img src="https://res.cloudinary.com/aminpaks/image/upload/v1552810472/app-02.jpg" />
        </div>
      </div>
    </StyledDemoContainer>
  );
};
