import styled from 'src/Theme';

export const StyledDemoContainer = styled.div`
  display: block;
  position: relative;
  pointer-events: none;

  .iphone-frame {
    width: 50rem;
    margin: -9rem 0 0 -13rem;
    z-index: 2;
    position: absolute;
  }
  .frames {
    top: -2.429rem;
    left: 4.286rem;
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
      transform: rotateX(-10deg) rotateY(31deg);
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
