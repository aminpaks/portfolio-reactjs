import React, { FC, memo } from 'react';

import { TabItem } from '../Tab';
import { StyledTabContentContainer, StyleTabContentItem } from './TabContents.styled';

export interface TabContentProps {
  activeId: string;
  items: TabItem[];
}

export const TabContents: FC<TabContentProps> = memo(({ activeId, items }: TabContentProps) => (
  <StyledTabContentContainer>
    {items.map(item => (
      <StyleTabContentItem
        key={item.id}
        isActive={item.id === activeId}
        className={item.id === activeId ? 'active' : ''}
      >
        {typeof item.content === 'function' ? item.content() : item.content}
      </StyleTabContentItem>
    ))}
  </StyledTabContentContainer>
));
