import styled, { WithThemeProps, whiten } from 'src/Theme';

export interface StyledTabContentItemProps {
  isActive: boolean;
}

const setWidthHeightValue = (props: WithThemeProps<StyledTabContentItemProps>) => {
  const width = props.isActive === true ? 'width: auto' : '';
  const height = props.isActive === true ? 'auto' : '0';
  return `${width};height:${height};`;
};

export const StyleTabContentItem = styled.div<StyledTabContentItemProps>`
  ${setWidthHeightValue};

  display: block;
  visibility: ${props => (props.isActive === true ? 'visible' : 'hidden')};
  transition: opacity 180ms linear;

  &:not(.active) {
    opacity: 0;
  }
`;

export const StyledTabContentContainer = styled.div`
  margin-top: 2.15em;
  color: ${props => whiten(props.theme.colorSet.text, 0.8)};
`;
