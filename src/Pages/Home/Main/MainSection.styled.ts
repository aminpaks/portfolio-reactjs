import styled from 'src/Theme';
import { keyframes } from 'styled-components';

const ani = keyframes`
0% { transform: translate(172px, -19px) scale(.86) rotateX(-10deg) rotateY(32deg) rotateZ(-1deg); }
20% { transform: rotateX(-10deg) rotateY(31deg); }
80% { transform: rotateX(-10deg) rotateY(31deg); }
100% { transform: translate(-231px, 20px) scale(1.2,1.2) rotateX(-9deg) rotateY(40deg); }
`;

export const StyledDevelopment = styled.div`
  .main-section {
    &,
    b {
      &::before {
        width: 2.143rem;
        height: 0.286rem;
        content: '';
        display: inline-block;
        vertical-align: middle;
      }
    }

    > h1 {
      margin: 0;
      line-height: 1;
      position: relative;
      display: inline-block;

      b,
      span {
        display: block;
      }
      b {
        font-size: 4.5rem;
        letter-spacing: -0.2rem;

        &::before {
          margin-left: -2.143rem;
          margin-right: 1.4rem;
          background-color: ${props => props.theme.colorSet.primary};
        }
      }
      span {
        font-size: 3.6rem;
        font-weight: 300;
        margin-left: 1.4rem;
        letter-spacing: 0.14rem;
      }
    }
  }
  .main-section-paragraph {
    font-size: 1.2rem;
    opacity: 0.6;
  }
`;

export const StyledDemoContainer = styled.div`
  display: block;
  position: relative;
  pointer-events: none;

  .iphone-frame {
    width: 50rem;
    margin: -9rem 0 -10rem -4rem;
    z-index: 2;
    position: absolute;
  }
  .frames {
    top: -2.429rem;
    left: 13.286rem;
    width: 17rem;
    height: 38rem;
    z-index: 1;
    font-size: 1px;
    position: absolute;
    perspective: 820px;
    perspective-origin: 50% 50%;
    clip-path: polygon(
      33em 520em,
      23em 520em,
      8em 506em,
      8em 506em,
      4em 492em,
      -6em 26em,
      -5em 22em,
      -3em 1em,
      5em -16em,
      18em -30em,
      19em -30em,
      190em -11em,
      204em -5em,
      205em -5em,
      216em 8em,
      216em 8em,
      218em 20em,
      215em 446em,
      212em 459em,
      211em 462em,
      195em 476em,
      166em 488em,
      162em 489em,
      33em 520em
    );

    > div {
      transform-style: preserve-3d;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
