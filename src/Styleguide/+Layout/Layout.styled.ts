import styled, { darken } from 'src/Theme';

export const StyledLayoutContainer = styled.div`
  > ul {
    list-style: none;

    > li {
      margin: 0 1em;
      display: inline-block;

      a {
        color: ${(props) => props.theme.colorSet.secondary};

        &:hover {
          color: ${(props) => darken(props.theme.colorSet.secondary, 0.2)};
        }
      }
    }
  }
`;
