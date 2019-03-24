import { keyframes } from 'styled-components';
import styled, { fade, darken, lighten } from 'src/Theme';

const blinkKeyframes = keyframes`
0% { opacity: 0 };
40% { opacity: 1 };
80% { opacity: 1 };
100% { opacity: 0 };
`;

export const StyledTypewriterContainer = styled.div`
  text-shadow: 0 0 20px ${props => fade(darken(props.theme.colorSet.secondary, 0.8), 0.3)};
  user-select: none;

  span {
    color: ${props => lighten(props.theme.colorSet.primary, 0.1)};
  }
  b {
    width: 0.11em;
    height: 1.1em;
    margin: 0;
    margin-left: 0.1em;
    display: inline-block;
    vertical-align: sub;
    background-color: #ffea5c;
    animation: 500ms linear infinite ${blinkKeyframes};
  }
`;
