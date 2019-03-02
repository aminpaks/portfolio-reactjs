import styled from 'styled-components';
import { mediaQuery } from 'src/Device';

export const StyledFooterContainer = styled.div`
  height: 620px;

  > div {
    background: ${(props) => props.theme.colorSet.secondary};
    border-top-left-radius: 80px;
    border-top-right-radius: 80px;
    height: 100%;
  }

  section > div {
    background: yellow;
  }

  ${mediaQuery.tabletPortraitMin} {
    > div {
      border-top-right-radius: 120px;
      border-top-left-radius: 0;
    }
  }
`;
