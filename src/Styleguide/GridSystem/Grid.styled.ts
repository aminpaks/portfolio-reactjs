import styled from 'src/Theme';
import { StyledGridContainer, StyledGridColumnContainer } from 'src/UI-Kits';

export const StyledGridSystemContainer = styled.div`
  margin: 0 2em;
  @media (min-width: ${props => props.theme.breakpoints.xl}px) {
    margin: 0 8em;
  }

  ${StyledGridContainer} {
    margin-bottom: 2em;
  }
  ${StyledGridColumnContainer} {
    position: relative;
    margin-bottom: 1em;

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
    margin-bottom: 0;
  }

  section > div {
    padding: 1em 0;
  }

  ul {
    margin-bottom: 1em;

    > li {
      margin-bottom: 0.6em;
    }
  }
`;
