import styled from 'styled-components';
import { mediaQuery } from 'src/Device';

export const StyledMainSectionContainer = styled.div`
  height: 620px;

  div {
    background: ${props => props.theme.colorSet.secondary};
    border-bottom-left-radius: 80px;
    border-bottom-right-radius: 80px;
    height: 100%;
  }

  ${mediaQuery.tabletPortraitMin} {
    div {
      border-bottom-right-radius: 0px;
      border-bottom-left-radius: 120px;
    }
  }
`;
