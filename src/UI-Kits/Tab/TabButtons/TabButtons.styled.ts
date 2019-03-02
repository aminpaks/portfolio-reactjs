import styled, { whiten, darken } from 'src/Theme';
import { mediaQuery } from 'src/Device';

export const StyledTabButton = styled.li<{ isActive: boolean }>`
  ${mediaQuery.tabletPortraitMin} {
    display: inline-block;

    &:not(:last-of-type) {
      margin-right: 3.58em;
    }
  }

  button {
    width: 100%;
    border: none;
    outline: none;
    background: none;
    font-size: 1.1rem;
    position: relative;
    padding: 0.85em 0.1em 0.73em;
    color: ${(props) =>
      props.isActive
        ? whiten(props.theme.colorSet.text, 0.8)
        : whiten(props.theme.colorSet.text, 4)};
    transition: 180ms ease-in-out;
    cursor: ${(props) => (props.isActive ? 'default' : 'pointer')};

    &:hover {
      color: ${(props) => (props.isActive ? null : props.theme.colorSet.primary)};
    }

    ${mediaQuery.tabletPortraitMin} {
      font-size: 1.38rem;

      &::after {
        left: auto;
        right: 0;
        bottom: -2px;
        width: 0;
        height: 0.136em;
        content: '';
        display: block;
        position: absolute;
        transition: 220ms;
        background-color: ${(props) => props.theme.colorSet.primary};
      }
    }
    &.active {
      &::after {
        left: 0;
        right: auto;
        width: 100%;
      }
    }
    ${mediaQuery.tabletPortraitMax} {
      &.active {
        color: #fff;
        background-color: ${(props) => darken(props.theme.colorSet.primary, 0.1)};
      }
      &:not(.active):hover {
        color: #fff;
        background-color: ${(props) => props.theme.colorSet.primary};
      }
    }
  }
`;

export const StyledTabButtonContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: block;
  list-style: none;
  text-align: center;
  border-bottom: 1px solid #ebebeb;
`;
