import React, { FC } from 'react';

export type PanelVariant = 'default' | 'with-top-accent';
export type PanelMargins = 'default' | 'out-standing';

export interface PanelProps {
  variant?: PanelVariant;
  margins?: PanelMargins;
  className?: string;
}

export const PanelComponent: FC<PanelProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);
