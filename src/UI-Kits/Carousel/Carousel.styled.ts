import styled, { fade, getPropValue } from 'src/Theme';

import { CarouselProps } from './Carousel';

const defaultArrowSize = '3.6em';

export const StyledCarouselsContainer = styled.div<CarouselProps>`
  margin: 0 auto;

  .slick-slider {
    display: block;
    position: relative;
    box-sizing: border-box;
    touch-action: pan-y;
    min-height: 80px;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    user-select: ${props => (props.draggable ? 'none' : undefined)};

    .slick-list,
    .slick-track {
      transform: translate3d(0, 0, 0);
    }
    .slick-list {
      display: block;
      position: relative;
      overflow: hidden;
      padding: 0;
      margin-left: ${getPropValue({ prop: 'slidePadding', defaultValue: '0em', normalize: -1 })};
      margin-right: ${getPropValue({ prop: 'slidePadding', defaultValue: '0em', normalize: -1 })};
    }
    .slick-track {
      display: flex;
      align-items: center;
    }
    .slick-slide {
      flex: 0 0 auto;
      min-height: 1px;

      > div > div {
        outline: none;
        cursor: ${props => (props.draggable ? 'default' : undefined)};
      }
    }

    .slick-arrow {
      top: calc(
        50% +
          ${getPropValue({ prop: 'arrowSize', defaultValue: defaultArrowSize, normalize: 0.03 })}
      );
      width: ${getPropValue({ prop: 'arrowSize', defaultValue: defaultArrowSize })};
      height: ${getPropValue({ prop: 'arrowSize', defaultValue: defaultArrowSize })};
      display: block;
      border-radius: 50%;
      position: absolute;
      background-color: #fff;
      transform: translateY(-50%);
      box-shadow: 0 0 14px ${fade('#000', 0.2)};
      z-index: 1001;
      cursor: pointer;

      &.slick-prev {
        left: ${getPropValue({
          prop: 'arrowSize',
          defaultValue: defaultArrowSize,
          normalize: -0.5,
        })};
      }
      &.slick-next {
        right: ${getPropValue({
          prop: 'arrowSize',
          defaultValue: defaultArrowSize,
          normalize: -0.5,
        })};
      }
    }
  }
`;
