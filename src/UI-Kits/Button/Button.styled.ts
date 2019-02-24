import styled from 'src/Theme';
import { keyframes } from 'styled-components';
import { PartialButtonProps } from './Button';
import {
  getTextColor,
  getBorderColor,
  getBackgroundColor,
  getPaddingValue,
  getTextSize,
} from './Util';

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
  display: inline-flex;
  padding: ${getPaddingValue};
  border-radius: 2em;
  overflow: hidden;
  background-color: ${getBackgroundColor()};
  outline: none;
  cursor: pointer;

  &,
  i,
  span {
    transition: 200ms ease-in-out;
  }

  i,
  span {
    user-select: none;
    font-style: normal;
    white-space: nowrap;
    text-decoration: none;
  }
  i {
    clip-path: polygon(0 100%, -35% 0, 0 0, 0 100%);
  }
  span {
    top: 0;
    left: 0;
    position: absolute;
    filter: blur(0px);
    padding: ${getPaddingValue};
    clip-path: polygon(100% 100%, 100% 0, -35% 0, 0 100%);
  }

  &:focus {
    border-color: ${getBorderColor('focus')};
    background-color: ${getBackgroundColor('focus')};

    span {
      color: ${getTextColor('focus')};
    }
  }
  /* order matters Hover should be after Focus */
  &:hover {
    border-color: ${getBorderColor('hover')};
    background-color: ${getBackgroundColor('hover')};

    i,
    span {
      color: ${getTextColor('hover')};
    }
    i {
      animation: ${showKeyFrames} 0.3s;
      animation-fill-mode: forwards;
      animation-delay: 0.2s;
    }
    span {
      animation: ${hideKeyFrames} 0.3s;
      animation-fill-mode: forwards;
    }
  }
`;
