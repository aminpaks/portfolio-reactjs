import colorUtils from 'color';
import styled, { keyframes } from 'styled-components';
import { PartialButtonProps } from './Button';

type StyleState = 'normal' | 'hover' | 'focus';

const tempPrimaryColor = '#5f67df';
const tempSecondaryColor = '#0accbe';

const getBackgroundColor = (state: StyleState = 'normal') => (props: PartialButtonProps) => {
  const { variant } = props;
  if (state === 'normal') {
    switch (variant) {
      case 'primary':
        return tempPrimaryColor;

      case 'secondary':
        return tempSecondaryColor;

      default:
        return '#fff';
    }
  } else if (state === 'hover') {
    switch (variant) {
      case 'default':
      case 'default-outline':
        return tempPrimaryColor;

      case 'primary':
      case 'secondary':
        return '#fff';

      default:
        break;
    }
  } else if (state === 'focus') {
    switch (variant) {
      case 'default':
      case 'default-outline':
      case 'primary':
        return colorUtils(tempPrimaryColor)
          .whiten(0.15)
          .hex()
          .toString();

      case 'secondary':
        return colorUtils(tempSecondaryColor)
          .darken(0.1)
          .hex()
          .toString();

      default:
        break;
    }
  }
  return null;
};

const getBorderColor = (state: StyleState = 'normal') => (props: PartialButtonProps) => {
  const { variant } = props;

  if (state === 'normal') {
    switch (variant) {
      case 'default-outline':
        return '#eee';

      case 'primary':
        return tempPrimaryColor;

      case 'secondary':
        return tempSecondaryColor;

      default:
        return colorUtils('#fff')
          .fade(1)
          .hex()
          .toString();
    }
  } else if (state === 'hover') {
    switch (variant) {
      case 'default-outline':
        return colorUtils(tempPrimaryColor)
          .fade(1)
          .hex()
          .toString();

      case 'primary':
        return '#fff';

      case 'secondary':
        return '#000';

      default:
        break;
    }
  } else if (state === 'focus') {
    switch (variant) {
      case 'default-outline':
        return colorUtils(tempPrimaryColor)
          .whiten(0.15)
          .fade(1)
          .hex()
          .toString();

      case 'secondary':
        return tempSecondaryColor;

      default:
        break;
    }
  }
  return null;
};

const getTextColor = (state: StyleState = 'normal') => (props: PartialButtonProps) => {
  const { variant } = props;
  if (state === 'normal') {
    switch (variant) {
      case 'primary':
      case 'secondary':
        return '#fff';

      default:
        return '#000';
    }
  } else if (state === 'hover') {
    switch (variant) {
      case 'default':
      case 'default-outline':
        return '#fff';

      case 'primary':
      case 'secondary':
        return '#000';

      default:
        break;
    }
  } else if (state === 'focus') {
    switch (variant) {
      case 'default':
      case 'default-outline':
      case 'primary':
      case 'secondary':
        return '#fff';

      default:
        break;
    }
  }
  return null;
};

const getPaddingValue = (state: StyleState = 'normal') => (props: PartialButtonProps) => {
  return '1em 2em';
};

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
  font-size: inherit;
  font-weight: 600;
  border: 2px solid ${getBorderColor()};
  position: relative;
  display: inline-flex;
  padding: ${getPaddingValue()};
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
    padding: ${getPaddingValue()};
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
