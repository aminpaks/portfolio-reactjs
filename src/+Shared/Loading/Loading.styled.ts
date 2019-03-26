import styled from 'src/Theme';

export const StyledLoadingWrapper = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  flex-direction: column;
  z-index: 99999;

  > div {
    text-align: center;
    user-select: none;
    pointer-events: none;

    > span {
      max-width: 20%;
      min-width: 5.714rem;
    }
  }

  span,
  svg {
    display: block;
  }
`;
