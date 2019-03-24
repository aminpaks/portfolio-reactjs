import styled from 'src/Theme';

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
  font-size: 1.57em;

  span {
    font-size: 4em;
    display: block;
  }
`;
