import styled from 'src/Theme';

import icon from './badge.svg';

export const StyledUnorderedList = styled.ul`
  padding: 0;
  list-style: none;
  text-align: left;

  > li {
    &::before {
      content: '';
      width: 2.143em;
      height: 2.143em;
      margin-right: 0.6em;
      display: inline-block;
      vertical-align: middle;
      background-image: url('${icon}');
    }
  }
`;
