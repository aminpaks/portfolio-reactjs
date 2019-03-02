import React, { FC, useState, useCallback, ReactChild, useEffect } from 'react';

import { TabButtons } from './TabButtons';
import { TabContents } from './TabContents';

export interface TabItem {
  id: string;
  title: string;
  content: string | (() => ReactChild);
}

export const Tab: FC<{
  children?: never;
  items: TabItem[];
}> = ({ items }) => {
  const firstItem = items[0];

  if (firstItem == null) {
    return null;
  }

  const [activeTab, setActiveTab] = useState<string>(firstItem.id);

  const handleActiveTabChange = useCallback((id: string) => setActiveTab(id), []);

  // Reset the state to default if items change
  useEffect(() => {
    setActiveTab(firstItem.id);
  }, [items]);

  return (
    <div>
      <TabButtons activeId={activeTab} items={items} onTabSelect={handleActiveTabChange} />
      <TabContents activeId={activeTab} items={items} />
    </div>
  );
};
