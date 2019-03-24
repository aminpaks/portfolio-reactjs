import styled, { getBreakpoint } from 'src/Theme';

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

    > h1 {
      margin: 0;
      line-height: 1;
      position: relative;
      display: inline-block;

      b,
      span {
        display: block;
      }
      b {
        font-size: 10vw;
        letter-spacing: -0.3rem;

        @media (min-width: ${getBreakpoint('md')}) {
          font-size: 4.5rem;
        }

        &::before {
          margin-left: -2.143rem;
          margin-right: 1.4rem;
          background-color: ${props => props.theme.colorSet.primary};
        }
      }
      span {
        font-size: 8vw;
        font-weight: 300;
        margin-left: 1.4rem;
        letter-spacing: 0.1rem;

        @media (min-width: ${getBreakpoint('md')}) {
          font-size: 3.6rem;
        }
      }
    }
  }
  .main-section-paragraph {
    font-size: 1.2rem;
    opacity: 0.6;
  }
`;
