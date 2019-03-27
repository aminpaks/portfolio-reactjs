import styled, { whiten, getBreakpoint } from 'src/Theme';

const navLinksSeparatorWidth = '1px';

export const StyledHeader = styled.nav`
  top: 0;
  left: 0;
  right: 0;
  display: block;
  position: fixed;
  z-index: 1010;

  @media screen and (min-width: ${getBreakpoint('xxl')}) {
    left: 6%;
  }

  > div {
    position: relative;

    &::before {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      content: '';
      display: block;
      position: absolute;
      background-color: ${props => props.theme.colorSet.secondary};
      border-bottom: 1px solid ${props => whiten(props.theme.colorSet.secondary, 0.3)};
    }

    > div {
      @media screen and (min-width: ${getBreakpoint('xxl')}) {
        margin-left: -6%;
      }

      > div {
        display: flex;
        padding-top: 1.857em;
        padding-bottom: 1.857em;

        padding-left: 1.2rem;
        padding-right: 1.2rem;

        @media screen and (min-width: ${getBreakpoint('md')}) {
          width: calc(${getBreakpoint('lg')} - 4.8rem);
          margin-left: auto;
          margin-right: auto;
          padding-left: 2.4rem;
          padding-right: 2.4rem;
        }
        @media screen and (min-width: ${getBreakpoint('xl')}) {
          width: calc(${getBreakpoint('xl')} - 4.8rem);
        }
      }
    }
  }
`;

export const StyledNavLogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 60px;
    margin-right: 1.857em;
  }
`;

export const StyledNavLinksContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-items: center;

  a {
    color: ${props => props.theme.colorSet.textInverted};
    flex: 0 0 auto;
    padding: 0 0.6em;
    display: block;
    position: relative;
    font-weight: 700;
    text-decoration: none;
    outline: none;

    &:hover {
      text-decoration: underline;
    }

    &:focus {
      outline: initial;
    }

    &:not(:first-child) {
      margin-left: calc(1em + ${navLinksSeparatorWidth});
    }

    &:not(:last-child) {
      margin-right: 1em;

      &::after {
        top: 50%;
        right: calc(-1em - ${navLinksSeparatorWidth});
        width: ${navLinksSeparatorWidth};
        height: 60%;
        display: block;
        position: absolute;
        transform: translateY(-40%);
        content: '';
        background-color: #ddd;
        user-select: none;
        pointer-events: none;
      }
    }
  }
`;
