import React, { FC } from 'react';

import { Section } from 'src/UI-Kits';
import { StyledCard } from './Card.styled';

export interface CardProps {
  borderColor: string;
}

export type PartialCardProps = Partial<CardProps>;

export const Card: FC<CardProps> = ({ children, borderColor }) => {
  return (
    <Section style={{ borderBottom: `1px solid ${borderColor}` }}>
      <StyledCard {...{ borderColor: borderColor }}>{children}</StyledCard>
    </Section>
  );
};
