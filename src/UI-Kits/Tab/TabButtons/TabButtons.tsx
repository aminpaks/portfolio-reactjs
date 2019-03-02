import React, { FC, memo } from 'react';

import { TabItem } from '../Tab';
import { StyledTabButtonContainer, StyledTabButton } from './TabButtons.styled';

export interface TabButtonProps {
  items: TabItem[];
  activeId: string;
  onTabSelect: (id: string) => void;
}

export const TabButtons: FC<TabButtonProps> = memo(({ items, activeId, onTabSelect }) => (
  <StyledTabButtonContainer>
    {items.map((item) => (
      <StyledTabButton key={item.id} isActive={item.id === activeId}>
        <button
          className={activeId === item.id ? 'active' : ''}
          type="button"
          onClick={() => onTabSelect(item.id)}
        >
          {item.title}
        </button>
      </StyledTabButton>
    ))}
  </StyledTabButtonContainer>
));
