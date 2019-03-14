import styled from 'src/Theme';
import { StyledGridContainer, StyledGridColumnContainer } from 'src/UI-Kits';

export const StyledGridSystemContainer = styled.div`
  margin: 4em;

  ${StyledGridContainer} {
    margin-bottom: 2em;
  }
  ${StyledGridColumnContainer} {
    position: relative;

    &:before {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: '';
      display: block;
      position: absolute;
      background-color: #fafafa;
      margin-left: 1em;
      margin-right: 1em;
      border: 1px solid #e0e0e0;
      border-width: 0 1px;
      z-index: -1;
    }
  }

  p {
    text-align: justify;
  }
`;
