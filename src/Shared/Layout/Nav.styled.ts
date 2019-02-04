import styled from 'styled-components';

export const StyledNavContainer = styled.nav`
  display: flex;

  a {
    padding: 0 1em;
    display: block;
    position: relative;

    &:not(:last-child) {
      padding-right: calc(1em + 1px);
      &:after {
        top: 50%;
        right: 0;
        width: 1px;
        height: 60%;
        display: block;
        position: absolute;
        transform: translateY(-36%);
        content: '';
        background-color: #ddd;
      }
    }
  }
`;
