import React, { FC } from 'react';
import { StyledCard } from './Card.styled';


export interface CardProps {
  backgroundColor: string;
}

export type PartialCardProps = Partial<CardProps>;

export const Card: FC<CardProps> = ({ children, backgroundColor }) => {
  return (
    <StyledCard {...{ backgroundColor }}>{children}</StyledCard>
  )
};
