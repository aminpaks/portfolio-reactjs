import styled from 'styled-components';
import colorUtils from 'color';

const tempPrimaryColor = '#5f67df';

export const StyledNavLogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 60px;
  }
`;

export const StyledNavLinksContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  margin-left: 1em;

  a {
    color: #fff;
    flex: 0 0 auto;
    padding: 0 0.6em;
    margin-left: calc(1em + 1px);
    margin-right: 1em;
    display: block;
    position: relative;

    &:not(:last-child) {
      &:after {
        top: 50%;
        right: calc(-1em - 1px);
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

export const StyledNavContainer = styled.nav`
  top: 0;
  left: 0;
  right: 0;
  display: block;
  position: fixed;
  z-index: 1000;

  > div {
    height: 74px;
    display: flex;
    position: relative;
    margin-left: 5%;
    padding-left: 14%;

    background-color: ${tempPrimaryColor};
    border-bottom: 1px solid
      ${colorUtils(tempPrimaryColor)
        .whiten(0.5)
        .hex()
        .toString()};
  }
`;
