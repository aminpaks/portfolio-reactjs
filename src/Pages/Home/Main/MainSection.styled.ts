import styled from 'src/Theme';

export const StyledDevelopment = styled.div`
  .main-section {
    &,
    b {
      &::before {
        width: 2.143rem;
        height: 0.286rem;
        content: '';
        display: inline-block;
        vertical-align: middle;
      }
    }

    > div {
      line-height: 1;
      position: relative;
      display: inline-block;

      b,
      span {
        display: block;
      }
      b {
        font-size: 4.5em;

        &::before {
          margin-left: -2.143rem;
          margin-right: 1.4rem;
          background-color: ${props => props.theme.colorSet.primary};
        }
      }
      span {
        margin-left: 1.4rem;
        letter-spacing: -0.214rem;
      }
    }
  }
`;
