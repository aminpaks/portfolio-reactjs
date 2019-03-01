import styled from 'styled-components';
import { PartialCardProps } from './Card';

const getBackgroundColor = () => (props: PartialCardProps) => {
  return props.backgroundColor;
};

export const StyledCard = styled.div<PartialCardProps>`
  height: 500px;
  border-bottom: 1px solid ${getBackgroundColor()};
  padding: 5px;
  position: relative;
`;
