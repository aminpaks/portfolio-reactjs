import styled from 'styled-components';

export const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  div {
    width: 33%;
    text-align: center;

    &:not(:last-child) {
      border-right: 1px solid lightgray;
    }
  }
`;

export const CounterWrapper = styled.div`
  height: 9em;
  background-color: #fff;
  // padding: 5em 0em;
  font-size: 1.57em;

  span {
    font-size: 4em;
    display: block;
  }
`;
