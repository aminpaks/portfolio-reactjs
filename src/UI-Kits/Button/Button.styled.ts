import styled, { fade } from 'src/Theme';
import { keyframes } from 'styled-components';

import { PartialButtonProps } from './Button';
import { getTextColor, getBorderColor, getBackgroundColor, getPaddingValue, getTextSize } from './Util';

const showKeyFrames = keyframes`
  from {
    clip-path: polygon(0 100%,-35% 0,0 0,0 100%);
  }
  to {
    clip-path: polygon(135% 100%,100% 0,0 0,0 100%);
  }
`;

const hideKeyFrames = keyframes`
  from {
    clip-path: polygon(100% 100%,100% 0,-35% 0,0 100%);
  }
  to {
    clip-path: polygon(100% 100%,100% 0,100% 0,135% 100%);
  }
`;

export const StyledButton = styled.button<PartialButtonProps>`
  color: ${getTextColor()};
  font-size: ${getTextSize};
  font-weight: 600;
  border: 2px solid ${getBorderColor()};
  position: relative;
  padding: 0;
  display: inline-flex;
  border-radius: 2em;
  overflow: hidden;
  background-color: ${getBackgroundColor()};
  outline: 1px dotted transparent;
  outline-offset: -0.01px;
  cursor: pointer;

  &::-moz-focus-inner {
    border: 0;
  }

  &,
  .button-child-element-1,
  .button-child-element-2 {
    transition: all 200ms ease-in-out, outline 0ms;
  }

  .button-holder-element {
    outline: none;
    display: block;
    text-decoration: none;
    padding: ${getPaddingValue};
  }

  .button-child-element-1,
  .button-child-element-2 {
    pointer-events: none;
    font-style: normal;
    white-space: nowrap;
    text-decoration: none;
  }
  .button-child-element-1 {
    clip-path: polygon(0 100%, -35% 0, 0 0, 0 100%);
  }
  .button-child-element-2 {
    top: 0;
    left: 0;
    position: absolute;
    filter: blur(0px);
    padding: ${getPaddingValue};
    clip-path: polygon(100% 100%, 100% 0, -35% 0, 0 100%);
  }

  &:focus,
  &:focus-within {
    border-color: ${getBorderColor('focus')};
    background-color: ${getBackgroundColor('focus')};
    outline-color: ${fade('#000', 0.3)};

    .button-child-element-2 {
      color: ${getTextColor('focus')};
    }
  }
  /* order matters Hover should be after Focus */
  &:hover {
    border-color: ${getBorderColor('hover')};
    background-color: ${getBackgroundColor('hover')};
    outline-color: transparent;

    .button-child-element-1,
    .button-child-element-2 {
      color: ${getTextColor('hover')};
    }
    .button-child-element-1 {
      animation: ${showKeyFrames} 0.3s;
      animation-fill-mode: forwards;
      animation-delay: 0.2s;
    }
    .button-child-element-2 {
      animation: ${hideKeyFrames} 0.3s;
      animation-fill-mode: forwards;
    }
  }
`;
