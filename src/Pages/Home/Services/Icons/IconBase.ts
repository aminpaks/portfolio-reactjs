import styled from 'styled-components';

export type IconBaseProps = { color?: string };

export const IconBase = styled.div<IconBaseProps>`
  &,
  svg {
    display: block;
  }
  path {
    stroke: none;
    fill-rule: nonzero;
    fill-opacity: 1;
    fill: ${props => props.color || '#000'};
  }
`;
